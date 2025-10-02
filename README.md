#  Pro Stopwatch

A simple, beautiful, responsive **Stopwatch** web app built with **HTML**, **CSS**, and **Vanilla JavaScript**.  

##  Features
-  Hours / Minutes / Seconds / Milliseconds display  
-  Start / ⏸ Stop /  Reset controls  
-  Lap recording  
-  Dark/Light theme toggle  
-  Responsive design for desktop & mobile  
-  Clean UI with hover effects and digital clock styling  

---

##  Project Structure

```bash
my_stopwatch/
├─ index.html   # HTML structure
├─ styles.css    # Styling & responsiveness
├─ main.js    # Stopwatch logic
└─ README.md    # Documentation
---

##  How to Use
- **Start** → Begin counting time  
- **Stop** → Pause the timer (can resume with Start)  
- **Reset** → Stop and reset to `00:00:00.00`  
- **Lap** → Record a split time  
- **🌙/☀️ Theme Toggle** → Switch between dark & light modes  

---

## 🛠 Technical Details
- Built with semantic **HTML5**  
- **CSS3** flexbox + media queries for responsiveness  
- **JavaScript (ES6)** for stopwatch logic  
- `setInterval(10)` used for milliseconds precision  
- Prevents duplicate timers with an `isRunning` flag  

---

##  Responsive Design
- **Tablets (≤768px):** smaller display and button sizing  
- **Mobile (≤480px):** buttons stack vertically, display resizes, lap list adjusts  

---

##  Extra Enhancements
- Collapsible Lap panel (for compact mobile UI)  
- Persist dark/light theme using `localStorage`  
- Export laps as CSV file  
- Keyboard shortcuts:  
  - **Space** → Start/Stop  
  - **L** → Lap  
  - **R** → Reset  

---

## ✅ Testing Checklist
- [ ] Start/Stop/Reset all work correctly  
- [ ] Milliseconds increment accurately  
- [ ] Laps record correctly  
- [ ] Reset clears laps and timer  
- [ ] Dark/Light toggle works  
- [ ] Mobile-friendly layout verified  
- [ ] No duplicate timers on multiple Start clicks  

---

##  Deployment
As a static project, this can be deployed easily with:  
- **GitHub Pages**  
- **Netlify**  
- **Vercel**  
- **Surge**  

---

##  License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.  

---

##  Author
**Segun Owolabi Olaniyi**  

---

##  Contributing
Contributions are welcome!  

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/new-feature`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push to the branch (`git push origin feature/new-feature`)  
5. Open a Pull Request  
