
#  AlgoVault 
> **v1.0.0** — Modular algorithm archive and interactive portfolio dashboard.

---

## Core Features

-  **Multi-Approach Tabbed Modal:** Compare multiple algorithmic solutions
-  **Syntax-Highlighted Code Viewer:** Integrated **Ace Editor** configured for secure, read-only code inspection and clipboard copying.
-  **CLI Content Automation:** Custom Node.js workflow (`npm run add`) that computes sequential IDs, appends entries to the dataset, and automatically resets staging templates.

---

##  Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 19, Vite |
| **Styling** | Tailwind CSS |
| **Code Editor** | Ace Editor (`react-ace` / `ace-builds`) |
| **Automation CLI** | Node.js (`fs`, `path`, `node:process`) |

---



##  Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/algovault.git](https://github.com/your-username/algovault.git)
   cd algovault
2. **Install dependencies:**
    ```bash
    npm install
3. **Start development server:**
    ```bash
    npm run dev
 ## Content Workflow Automation

-Adding new algorithmic solutions is handled locally via a CLI automation script

1. **Fill out the staging file at src/data/new-solution.json**
    ```json
    {
        "title": "Two Sum",
        "language": "javascript",
        "difficulty": "Easy",
        "category": "Array Methods",
        "description": "Find indices of two numbers that add up to target.",
        "src": "LeetCode",
        "approaches": [
            {
            "name": "Approach 1: Hash Map",
            "description": "O(n) time complexity pass.",
            "code": "function twoSum(nums, target) { ... }"
            }
        ]
    }
    ```
2. **Execute the automation command:**
    ```bash
    npm run build
 ## Project structure

```text
    algovault/
    ├── scripts/
    │   └── add-solution.js         # CLI automation for data staging
    ├── src/    
    │   ├── components/             # UI building blocks (Header, Sidebar, Modals)
    │   ├── data/   
    │   │   ├── new-solution.json   # Local staging template
    │   │   └── solutions.json      # Primary algorithm dataset
    │   ├── App.jsx                 # Main application root
    │   └── main.jsx                # React entry point
    ├── package.json
    └── README.md
```