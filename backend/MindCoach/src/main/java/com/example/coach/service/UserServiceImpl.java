package com.example.coach.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.coach.entity.Categorie;
import com.example.coach.entity.User;
import com.example.coach.entity.UserDTO;
import com.example.coach.repo.CategoryRepository;
import com.example.coach.repo.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public UserDTO saveUser(UserDTO u) {
        // Encode the password before saving
        String encodedPassword = passwordEncoder.encode(u.getPassword());
        u.setPassword(encodedPassword); // Set the encoded password

        // Save the user and convert to DTO
        return convertEntityToDto(userepository.save(convertDtoToEntity(u)));
    }

    @Override
    public UserDTO updateUser(UserDTO userDto) {
        // Retrieve the existing user
        User existingUser = userepository.findById(userDto.getId()).orElseThrow(() -> new RuntimeException("User not found"));

        // Preserve old values for password, role, category, and status
        if (userDto.getPassword() == null || userDto.getPassword().isEmpty()) {
            userDto.setPassword(existingUser.getPassword()); // Keep the old password
        }
        if (userDto.getRole() == null || userDto.getRole().isEmpty()) {
            userDto.setRole(existingUser.getRole()); // Keep the old role
        }
        if (userDto.getStatus() == null) {
            userDto.setStatus(existingUser.getStatus()); // Keep the status unchanged
        }

        // Encode the password if it's updated
        if (userDto.getPassword() != null && !userDto.getPassword().equals(existingUser.getPassword())) {
            String encodedPassword = passwordEncoder.encode(userDto.getPassword());
            userDto.setPassword(encodedPassword);
        }

        // Convert DTO to entity and save
        User updatedUser = convertDtoToEntity(userDto);
        return convertEntityToDto(userepository.save(updatedUser));
    }

    @Override
    public void deleteUser(User u) {
        userepository.delete(u);
    }

    @Override
    public void deleteUserById(Long id) {
        userepository.deleteById(id);
    }

    @Override
    public UserDTO getUser(Long id) {
        User user = userepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        return convertEntityToDto(user);
    }

    @Override
    public List<UserDTO> getAllusers() {
        return userepository.findAll().stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<User> findByUsername(String username) {
        return userepository.findByUsername(username);
    }

    @Override
    public List<User> findByCategorie(Categorie categorie) {
        return userepository.findByCategorie(categorie);
    }

    @Override
    public List<Categorie> getAllCategories() {
        return categoryRepository.findAll(); // Fetch categories from the CategoryRepository
    }

    @Override
    public UserDTO convertEntityToDto(User user) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public User convertDtoToEntity(UserDTO userDto) {
        return modelMapper.map(userDto, User.class);
    }

    @Override
    public List<User> findByCategorieIdCategorie(Long idCategorie) {
        return userepository.findByCategorieIdCategorie(idCategorie);
    }

    @Override
    public User findByPassword(String password) {
        return userepository.findByPassword(password);
    }
}