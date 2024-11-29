var Token = function(value, expirationTimeInSeconds, scope) {
  
  
    var value = value;
    var startTime = new Date().getTime();
    var finishTime = new Date(startTime + expirationTimeInSeconds * 1000); 
    var scope = scope;
    
    if (!Cookies.get('suapToken')) {
      Cookies.set('suapToken', value, { expires: finishTime});
    } else {
      value = Cookies.get('suapToken');
    }
  
    if (!Cookies.get('suapTokenExpirationTime')) {
      Cookies.set('suapTokenExpirationTime', finishTime, { expires: finishTime});
    } else {
      finishTime = Cookies.get('suapTokenExpirationTime');
    }
  
    if (!Cookies.get('suapScope')) {
      Cookies.set('suapScope', scope, { expires: finishTime});
    } else {
      scope = Cookies.get('suapScope');
    }
  
    this.getValue = function() {
      return value;
    };
  
    this.getExpirationTime = function() {
      return finishTime;
    };
  
    this.getScope = function() {
      return scope;
    };
  
    this.isValid = function() {
      if (Cookies.get('suapToken') && value != null) {
        return true;
      }
      return false;
    };
  
    this.revoke = function() {
  
      value = null;
      startTime = null;
      finishTime = null;
  
      if (Cookies.get('suapToken')){
        Cookies.remove('suapToken');
      }
  
      if (Cookies.get('suapTokenExpirationTime')){
        Cookies.remove('suapTokenExpirationTime');
      }
  
      if (Cookies.get('suapScope')){
        Cookies.remove('suapScope');
      }
  
    };
  
  };
  
   var SuapClient = function(authHost, clientID, redirectURI, scope) {
  
  
    var authHost = authHost;
    var clientID = clientID;
    var redirectURI = redirectURI;
    var scope = scope;
  
    var resourceURL = authHost + '/api/eu/';
    var authorizationURL = authHost + '/o/authorize/';
    var logoutURL = authHost + '/o/revoke_token/';
  
    var responseType = 'token';
    var grantType = 'implict';
  
    if (authHost.charAt(authHost.length - 1) == '/') {
      authHost = authHost.substr(0, authHost.length - 1);
    }
  
    var dataJSON;
    var token;
  
    var extractToken = function() {
      var match = document.location.hash.match(/access_token=(\w+)/);
      if (match != null) {
        return !!match && match[1];
      }
      return null;
    };
  
    var extractScope = function() {
      var match = document.location.hash.match(/scope=(.*)/);
      if (match != null) {
        return match[1].split('+').join(' ');
      }
      return null;
    };
  
    var extractDuration = function() {
  
      var match = document.location.hash.match(/expires_in=(\d+)/);
  
      if (match != null) {
        return Number(!!match && match[1]);
      }
  
      return 0;
    };
  
    var getCookie = function (name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    };
  
    this.init = function() {
      token = new Token(extractToken(), extractDuration(), extractScope());
      dataJSON = {};
    };
  
    this.getToken = function() {
      return token;
    };
  
    this.getDataJSON = function() {
      return dataJSON;
    };
  
    this.getRedirectURI = function() {
      return redirectURI;
    };
  
    this.isAuthenticated = function() {
      return token.isValid();
    };
  
    this.getLoginURL = function() {
      var loginUrl = authorizationURL +
        "?response_type=" + responseType +
        "&grant_type="    + grantType +
        "&client_id="     + clientID +
        "&scope="  + scope;
        "&redirect_uri="  + redirectURI;
      return loginUrl;
    };
  
    this.getRegistrationURL = function() {
      var registrationUrl = authHost +
        "/register/" +
        "?redirect_uri="  + redirectURI;
      return registrationUrl;
    };
  
    this.getResource = function(scope, callback) {
        $.ajax({
          url: resourceURL,
          data: {'scope': scope},
          headers: {"Authorization": "Bearer " + token.getValue(),
                    "Accept": "application/json"},
          type: 'GET',
          success: function(response) {
              console.log(response);
              callback(response);
          },
          error: function(response) {
              alert('Falha na comunicação com o SUAP');
              console.log(response);
          }
      });
    };
  
    this.login = function() {
      window.location = this.getLoginURL();
    };
      
    this.logout = function() {
        $.ajax({
          url: logoutURL,
          data: {'token': token.getValue(), 'client_id': clientID},
          type: 'POST',
          success: function(response) {
              token.revoke();
              window.location = redirectURI;
          },
          error: function(response) {
              alert('Falha na comunicação com o SUAP');
              console.log(response);
          }
      });
    };
};