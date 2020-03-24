package com.lxisoft.web.rest;

import com.lxisoft.MockTestApp;
import com.lxisoft.domain.AttendedOptn;
import com.lxisoft.repository.AttendedOptnRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link AttendedOptnResource} REST controller.
 */
@SpringBootTest(classes = MockTestApp.class)

@AutoConfigureMockMvc
@WithMockUser
public class AttendedOptnResourceIT {

    @Autowired
    private AttendedOptnRepository attendedOptnRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restAttendedOptnMockMvc;

    private AttendedOptn attendedOptn;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static AttendedOptn createEntity(EntityManager em) {
        AttendedOptn attendedOptn = new AttendedOptn();
        return attendedOptn;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static AttendedOptn createUpdatedEntity(EntityManager em) {
        AttendedOptn attendedOptn = new AttendedOptn();
        return attendedOptn;
    }

    @BeforeEach
    public void initTest() {
        attendedOptn = createEntity(em);
    }

    @Test
    @Transactional
    public void createAttendedOptn() throws Exception {
        int databaseSizeBeforeCreate = attendedOptnRepository.findAll().size();

        // Create the AttendedOptn
        restAttendedOptnMockMvc.perform(post("/api/attended-optns").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(attendedOptn)))
            .andExpect(status().isCreated());

        // Validate the AttendedOptn in the database
        List<AttendedOptn> attendedOptnList = attendedOptnRepository.findAll();
        assertThat(attendedOptnList).hasSize(databaseSizeBeforeCreate + 1);
        AttendedOptn testAttendedOptn = attendedOptnList.get(attendedOptnList.size() - 1);
    }

    @Test
    @Transactional
    public void createAttendedOptnWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = attendedOptnRepository.findAll().size();

        // Create the AttendedOptn with an existing ID
        attendedOptn.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restAttendedOptnMockMvc.perform(post("/api/attended-optns").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(attendedOptn)))
            .andExpect(status().isBadRequest());

        // Validate the AttendedOptn in the database
        List<AttendedOptn> attendedOptnList = attendedOptnRepository.findAll();
        assertThat(attendedOptnList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllAttendedOptns() throws Exception {
        // Initialize the database
        attendedOptnRepository.saveAndFlush(attendedOptn);

        // Get all the attendedOptnList
        restAttendedOptnMockMvc.perform(get("/api/attended-optns?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(attendedOptn.getId().intValue())));
    }
    
    @Test
    @Transactional
    public void getAttendedOptn() throws Exception {
        // Initialize the database
        attendedOptnRepository.saveAndFlush(attendedOptn);

        // Get the attendedOptn
        restAttendedOptnMockMvc.perform(get("/api/attended-optns/{id}", attendedOptn.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(attendedOptn.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingAttendedOptn() throws Exception {
        // Get the attendedOptn
        restAttendedOptnMockMvc.perform(get("/api/attended-optns/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateAttendedOptn() throws Exception {
        // Initialize the database
        attendedOptnRepository.saveAndFlush(attendedOptn);

        int databaseSizeBeforeUpdate = attendedOptnRepository.findAll().size();

        // Update the attendedOptn
        AttendedOptn updatedAttendedOptn = attendedOptnRepository.findById(attendedOptn.getId()).get();
        // Disconnect from session so that the updates on updatedAttendedOptn are not directly saved in db
        em.detach(updatedAttendedOptn);

        restAttendedOptnMockMvc.perform(put("/api/attended-optns").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedAttendedOptn)))
            .andExpect(status().isOk());

        // Validate the AttendedOptn in the database
        List<AttendedOptn> attendedOptnList = attendedOptnRepository.findAll();
        assertThat(attendedOptnList).hasSize(databaseSizeBeforeUpdate);
        AttendedOptn testAttendedOptn = attendedOptnList.get(attendedOptnList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingAttendedOptn() throws Exception {
        int databaseSizeBeforeUpdate = attendedOptnRepository.findAll().size();

        // Create the AttendedOptn

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restAttendedOptnMockMvc.perform(put("/api/attended-optns").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(attendedOptn)))
            .andExpect(status().isBadRequest());

        // Validate the AttendedOptn in the database
        List<AttendedOptn> attendedOptnList = attendedOptnRepository.findAll();
        assertThat(attendedOptnList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteAttendedOptn() throws Exception {
        // Initialize the database
        attendedOptnRepository.saveAndFlush(attendedOptn);

        int databaseSizeBeforeDelete = attendedOptnRepository.findAll().size();

        // Delete the attendedOptn
        restAttendedOptnMockMvc.perform(delete("/api/attended-optns/{id}", attendedOptn.getId()).with(csrf())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<AttendedOptn> attendedOptnList = attendedOptnRepository.findAll();
        assertThat(attendedOptnList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
