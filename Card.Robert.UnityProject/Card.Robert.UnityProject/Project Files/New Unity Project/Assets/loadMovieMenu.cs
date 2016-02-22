using UnityEngine;
using System.Collections;

[RequireComponent (typeof(AudioSource))]

public class loadMovieMenu : MonoBehaviour {
	
	public MovieTexture movie;
	
	// Use this for initialization
	void Start () 
	{
		//casting movie as MovieTexture
		GetComponent<Renderer>().material.mainTexture = movie as MovieTexture;
		movie.loop = true ;
		movie.Play ();

		
	}
	

	
}
