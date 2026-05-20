* {
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
}

.card h2 {
  margin-bottom: 10px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup-content {
  background: white;
  width: 90%;
  max-width: 700px;
  padding: 40px;
  border-radius: 25px;
  position: relative;
  animation: fadeIn 0.3s ease;
}

.close {
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 2rem;
  cursor: pointer;
}

.hidden {
  display: none;
}

.letter h2 {
  margin-bottom: 20px;
}

.letter p {
  line-height: 1.8;
  font-size: 1.05rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}