package mindcoach.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindcoach.*;
@Repository
public interface RoleRepository extends JpaRepository<Role,Long>{

}
