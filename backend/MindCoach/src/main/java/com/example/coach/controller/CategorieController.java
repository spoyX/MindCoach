package com.example.coach.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.coach.entity.Categorie;
import com.example.coach.repo.CategoryRepository;

@RestController
@RequestMapping("/user/cat")
@CrossOrigin(origins = "http://localhost:4200")
public class CategorieController {

    @Autowired
    CategoryRepository categoryRepository;

    // GET: Retrieve all categories
    @RequestMapping(method = RequestMethod.GET)
    public List<Categorie> getAllCategories() {
        return categoryRepository.findAll();
    }

    // GET: Retrieve a category by ID
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Categorie> getCategorieById(@PathVariable("id") Long id) {
        return categoryRepository.findById(id)
                .map(categorie -> new ResponseEntity<>(categorie, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // POST: Add a new category
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Categorie> addCategorie(@RequestBody Categorie categorie) {
        Categorie savedCategorie = categoryRepository.save(categorie);
        return new ResponseEntity<>(savedCategorie, HttpStatus.CREATED);
    }
}