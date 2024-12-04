<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\User;

class notificaUser extends Notification
{
    private $usuario;

    /**
     * Create a new notification instance.
     */
    public function __construct(User $usuario)
    {
        $this->usuario = $usuario;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->line('Enviando Email de Teste')
                    ->subject('Testando Notificação') 
                    ->greeting('Olá, ' . $this->usuario->name)
                    ->action('Entrar no Sistema', url('/'))
                    ->line('Obrigado por usar o sistema!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
           
        ];
    }
}
