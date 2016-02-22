#pragma strict

var pauseCanvas : Canvas;
var isPause = false;
var optionsCanvas : Canvas;

var nameDisplay : UnityEngine.UI.Text;

var playerName : String;

function Start () {
		
			Screen.lockCursor = true;
			Cursor.visible = false;
			getName();
			nameDisplay.text = playerName;
}

function Update () 
{
	//Debug.Log("Inside Update");
	
	if(Input.GetKeyDown(KeyCode.Escape))
	{
	
			//isPause = !isPause;
			//if(isPause) {
			
			Debug.Log("Inside M");
			
		   (gameObject.Find("First Person Controller").GetComponent("MouseLook") as MonoBehaviour).enabled = false;
		   (gameObject.Find("Main Camera").GetComponent("MouseLook") as MonoBehaviour).enabled = false;
			pauseCanvas.enabled = true;
			Time.timeScale = 0.0001;
			Screen.lockCursor = false;
			Cursor.visible = true;
			
			//Screen.lockCursor = false;
			//Cursor.lockState = CursorLockMode.Locked;
			//Cursor.visible = true;
				//}
			//}
		//	else{
			// Debug.Log("Inside else");
			// Time.timeScale = 1; 
			// pauseCanvas.enabled = false;
			 
			// (gameObject.Find("First Person Controller").GetComponent("MouseLook") as MonoBehaviour).enabled = true;
		   //  (gameObject.Find("Main Camera").GetComponent("MouseLook") as MonoBehaviour).enabled = true;
			//}

	}
}

function ResumeGame () {
		
			Debug.Log("Inside ResumeGame");
			
			
		   (gameObject.Find("First Person Controller").GetComponent("MouseLook") as MonoBehaviour).enabled = true;
		   (gameObject.Find("Main Camera").GetComponent("MouseLook") as MonoBehaviour).enabled = true;
			pauseCanvas.enabled = false;
			Time.timeScale = 1;
			Screen.lockCursor = true;
			Cursor.visible = false;

}

function PauseOptions () {
		pauseCanvas.enabled =! pauseCanvas.enabled;
		optionsCanvas.enabled =! optionsCanvas.enabled;

}

function ExitGame () {
		Application.Quit();

}

function ExitToMain () {
		Application.LoadLevel ("mainMenuScene");
		Time.timeScale = 1;
}

function getName()
{
	Debug.Log("getName");
	playerName = PlayerPrefs.GetString("name");
}
