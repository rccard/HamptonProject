#pragma strict

var descriptionBoxCanvas : Canvas;


	function OnTriggerEnter (Collider)
	{
		descriptionBoxCanvas.enabled = true;
		Debug.Log("Entered");
	}
	
	function OnTriggerStay (Collider)
	{
		Debug.Log("Within");
	}
	
	function OnTriggerExit (Collider)
	{
		descriptionBoxCanvas.enabled = false;
		Debug.Log("Exit");
	}

	// Use this for initialization
	function Start () {
	
	}
	
	// Update is called once per frame
	function Update () {
	
	}
