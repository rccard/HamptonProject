using UnityEngine;
using System.Collections;

[RequireComponent (typeof(AudioSource))]

public class loadMovie : MonoBehaviour {

	public MovieTexture movie;

	// Use this for initialization
	void Start () 
	{

        ((MovieTexture)GetComponent<Renderer>().material.mainTexture).Play();
        Renderer r = GetComponent<Renderer>();
        MovieTexture movie = (MovieTexture)r.material.mainTexture;

        movie.Play();

        //casting movie as MovieTexture
        GetComponent<Renderer>().material.mainTexture = movie as MovieTexture;
		movie.Play ();
		StartCoroutine(waitAndLoad ());
		//movie.loop = true ;

	}

	IEnumerator waitAndLoad()
	{
		yield return new WaitForSeconds (8);
		Application.LoadLevel ("mainMenuScene");
	}

}
