package mindcoach.Services;

import java.util.List;

import mindcoach.*;

public interface UserService {

 List<User> getAllUsers();
 User findUserById(Long id);
 User addUser(User utilisateur);
 User updateUser(User utilisateur);
 User DeleteUser(Long id);  
}
