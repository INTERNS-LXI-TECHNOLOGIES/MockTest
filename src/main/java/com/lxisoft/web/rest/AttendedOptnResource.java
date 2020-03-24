package com.lxisoft.web.rest;

import com.lxisoft.domain.AttendedOptn;
import com.lxisoft.repository.AttendedOptnRepository;
import com.lxisoft.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.lxisoft.domain.AttendedOptn}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AttendedOptnResource {

    private final Logger log = LoggerFactory.getLogger(AttendedOptnResource.class);

    private static final String ENTITY_NAME = "attendedOptn";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AttendedOptnRepository attendedOptnRepository;

    public AttendedOptnResource(AttendedOptnRepository attendedOptnRepository) {
        this.attendedOptnRepository = attendedOptnRepository;
    }

    /**
     * {@code POST  /attended-optns} : Create a new attendedOptn.
     *
     * @param attendedOptn the attendedOptn to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new attendedOptn, or with status {@code 400 (Bad Request)} if the attendedOptn has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/attended-optns")
    public ResponseEntity<AttendedOptn> createAttendedOptn(@RequestBody AttendedOptn attendedOptn) throws URISyntaxException {
        log.debug("REST request to save AttendedOptn : {}", attendedOptn);
        if (attendedOptn.getId() != null) {
            throw new BadRequestAlertException("A new attendedOptn cannot already have an ID", ENTITY_NAME, "idexists");
        }
        AttendedOptn result = attendedOptnRepository.save(attendedOptn);
        return ResponseEntity.created(new URI("/api/attended-optns/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /attended-optns} : Updates an existing attendedOptn.
     *
     * @param attendedOptn the attendedOptn to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated attendedOptn,
     * or with status {@code 400 (Bad Request)} if the attendedOptn is not valid,
     * or with status {@code 500 (Internal Server Error)} if the attendedOptn couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/attended-optns")
    public ResponseEntity<AttendedOptn> updateAttendedOptn(@RequestBody AttendedOptn attendedOptn) throws URISyntaxException {
        log.debug("REST request to update AttendedOptn : {}", attendedOptn);
        if (attendedOptn.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        AttendedOptn result = attendedOptnRepository.save(attendedOptn);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, attendedOptn.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /attended-optns} : get all the attendedOptns.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of attendedOptns in body.
     */
    @GetMapping("/attended-optns")
    public List<AttendedOptn> getAllAttendedOptns() {
        log.debug("REST request to get all AttendedOptns");
        return attendedOptnRepository.findAll();
    }

    /**
     * {@code GET  /attended-optns/:id} : get the "id" attendedOptn.
     *
     * @param id the id of the attendedOptn to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the attendedOptn, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/attended-optns/{id}")
    public ResponseEntity<AttendedOptn> getAttendedOptn(@PathVariable Long id) {
        log.debug("REST request to get AttendedOptn : {}", id);
        Optional<AttendedOptn> attendedOptn = attendedOptnRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(attendedOptn);
    }

    /**
     * {@code DELETE  /attended-optns/:id} : delete the "id" attendedOptn.
     *
     * @param id the id of the attendedOptn to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/attended-optns/{id}")
    public ResponseEntity<Void> deleteAttendedOptn(@PathVariable Long id) {
        log.debug("REST request to delete AttendedOptn : {}", id);
        attendedOptnRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
