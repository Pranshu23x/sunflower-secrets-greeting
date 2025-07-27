
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ConfettiEffect from './ConfettiEffect';

const GreetingCard = () => {
  const [name, setName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);
  const [isSecret, setIsSecret] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [typingText, setTypingText] = useState('');

  // Auto redirect for non-secret names
  useEffect(() => {
    if (showGreeting && !isSecret) {
      const timer = setTimeout(() => {
        window.open('https://www.instagram.com/pranshu23x/', '_blank');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showGreeting, isSecret]);

  // Typing animation for secret message
  useEffect(() => {
    if (isSecret) {
      const message = "Hey ! i guess you cracked the code to this website and my heart ❤️";
      let currentIndex = 0;
      setTypingText('');
      
      const typeTimer = setInterval(() => {
        if (currentIndex < message.length) {
          setTypingText(prev => prev + message[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typeTimer);
        }
      }, 80);
      
      return () => clearInterval(typeTimer);
    }
  }, [isSecret]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    const secretNames = ['archita', 'archita samal'];
    const isSecretName = secretNames.includes(name.toLowerCase().trim());
    
    setIsSecret(isSecretName);
    setShowGreeting(true);
    
    if (isSecretName) {
      setShowConfetti(true);
      // Play a gentle chime sound (optional)
      try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyMEMoPN8t2QQAoUXrTp66hVFApGn+DyvmAZBTGH0O/VgyME');
        audio.play();
      } catch (error) {
        console.log('Audio playback failed:', error);
      }
    }
  };

  const resetGreeting = () => {
    setShowGreeting(false);
    setIsSecret(false);
    setShowConfetti(false);
    setTypingText('');
    setName('');
  };

  return (
    <div className="relative">
      {showConfetti && <ConfettiEffect />}
      
      <div className={`glassmorphism-card rounded-3xl p-8 md:p-12 max-w-md mx-auto shadow-2xl transform transition-all duration-500 hover:scale-105 ${
        isSecret ? 'bg-gradient-to-br from-pink-100/40 via-red-50/30 to-rose-100/40 border-pink-200/50' : ''
      }`}>
        <div className="text-center">
          <h1 className={`font-pacifico text-3xl md:text-4xl mb-2 animate-pulse-glow ${
            isSecret ? 'text-pink-600' : 'text-sunflower-700'
          }`}>
            {isSecret ? '💕 Sweet Secrets 💕' : 'Sunflower Greetings'}
          </h1>
          <div className={`w-16 h-1 rounded-full mx-auto mb-6 ${
            isSecret ? 'bg-gradient-to-r from-pink-400 to-red-400' : 'bg-gradient-to-r from-sunflower-400 to-sunflower-600'
          }`}></div>
          
          {!showGreeting ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-brown-800 font-medium text-lg">
                  What's your name?
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                  className="text-center text-lg py-3 border-2 border-sunflower-200 focus:border-sunflower-400 rounded-xl bg-white/50 backdrop-blur-sm"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-sunflower-400 to-sunflower-600 hover:from-sunflower-500 hover:to-sunflower-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                Say Hello! 🌻
              </Button>
            </form>
          ) : (
            <div className="space-y-6 animate-in fade-in-50 duration-500">
              {isSecret ? (
                <div className="space-y-6">
                  <div className="animate-bloom">
                    <div className="text-6xl mb-4">💖</div>
                    <div className="min-h-[120px] flex items-center justify-center">
                      <p className="text-lg font-medium text-pink-600 leading-relaxed text-center">
                        {typingText}
                        <span className="animate-pulse">|</span>
                      </p>
                    </div>
                    <div className="flex justify-center space-x-2 mt-4">
                      <span className="text-2xl animate-pulse">💕</span>
                      <span className="text-2xl animate-bounce">🌹</span>
                      <span className="text-2xl animate-pulse">💕</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-4xl mb-4 animate-bounce">🌻</div>
                  <h2 className="text-xl font-medium text-brown-800">
                    Hey {name}, nice to meet you!
                  </h2>
                  <p className="text-brown-700 mb-4">
                    Let's connect 🌻
                  </p>
                  <p className="text-sm text-brown-600 animate-pulse">
                    Redirecting to Instagram in 2 seconds...
                  </p>
                </div>
              )}
              
              <Button
                onClick={resetGreeting}
                variant="outline"
                className={`mt-6 rounded-xl px-6 py-2 ${
                  isSecret 
                    ? 'border-pink-300 text-pink-700 hover:bg-pink-50' 
                    : 'border-sunflower-300 text-sunflower-700 hover:bg-sunflower-50'
                }`}
              >
                {isSecret ? 'Try Another Name 💕' : 'Try Another Name'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
