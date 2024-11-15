package MindCoach.Services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MindCoach.User;
import MindCoach.Repository.UserRepository;



@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User findUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    @Override
    public User addUser(User utilisateur) {
        return userRepository.save(utilisateur);
    }

    @Override
    public User updateUser(User utilisateur) {
        if (userRepository.existsById(utilisateur.getId())) {
            return userRepository.save(utilisateur);
        }
        return null;
    }

    @Override
    public User DeleteUser(Long id) {  
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.deleteById(id);  
            return user.get();  
        }
        return null;  
    }
}
