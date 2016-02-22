#pragma strict

static var playerName : String;
var inputField : UnityEngine.UI.InputField;
var nameDisplay : UnityEngine.UI.Text;

function StartGame () {
		
		Application.LoadLevel ("pauseScreenScene");
		Time.timeScale = 1;

}

function NameInput () {

	playerName = inputField.text;
	nameDisplay.text = playerName;
	inputField.enabled = false;
	
	//GetComponent.<GUIText>().text = playerName;
}

function saveName()
{
	Debug.Log("saveName");
	PlayerPrefs.SetString("name",playerName);
	
}

function getName()
{
	Debug.Log("getName");
	PlayerPrefs.GetString("name");
}