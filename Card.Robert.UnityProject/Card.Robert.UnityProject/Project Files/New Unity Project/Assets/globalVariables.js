#pragma strict

static var playerName : String;
var inputField : UnityEngine.UI.InputField;
var nameDisplay : UnityEngine.UI.Text;

function NameInput () {

	playerName = inputField.text;
	nameDisplay.text = playerName;
	inputField.enabled = false;
	
	GetComponent.<GUIText>().text = playerName;
}
