# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037040000) |  | dev | flaky_500 | 2096.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 36 minutes
- 2026-02-06 PASS 35 minutes
- 2026-02-07 PASS 37 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 38 minutes
- 2026-02-10 PASS 43 minutes
- 2026-02-11 PASS 33 minutes
- 2026-02-12 PASS 35 minutes
- 2026-02-13 PASS 37 minutes
- 2026-02-14 PASS 35 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 38 minutes
- 2026-02-17 PASS 36 minutes
- 2026-02-18 PASS 36 minutes
- 2026-02-19 PASS 47 minutes
- 2026-02-20 PASS 36 minutes
- 2026-02-21 PASS 34 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 36 minutes
- 2026-02-24

### Error 2026-02-24T00:37:04+00:00
```
2026-02-24T00:37:04.0525716Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-02-24T00:40:00.5719582Z === CONT  TestAccAdvancedCluster_moveMultisharding
2026-02-24T01:11:23.4229595Z === NAME  TestAccAdvancedCluster_moveMultisharding
2026-02-24T01:11:23.4230466Z     move_upgrade_state_test.go:45: Step 2/2 error: Error running apply: exit status 1
2026-02-24T01:11:23.4231071Z         
2026-02-24T01:11:23.4231353Z         Error: Error in update
2026-02-24T01:11:23.4231728Z         
2026-02-24T01:11:23.4232103Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T01:11:23.4232989Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T01:11:23.4233773Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T01:11:23.4234267Z         
2026-02-24T01:11:23.4234743Z         cluster name: test-acc-tf-c-3130186782105040419, API error details: (503
2026-02-24T01:11:23.4235542Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:14:57.3573372Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (2096.79s)
```

- 2026-02-25 PASS 42 minutes
- 2026-02-26 PASS 38 minutes
- 2026-02-27 PASS 33 minutes
- 2026-02-28 PASS 34 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 35 minutes
  - PASS 35 minutes
- 2026-03-03 PASS 36 minutes
- 2026-03-04 PASS 36 minutes
- 2026-03-05 PASS 45 minutes
- 2026-03-06 PASS 39 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 27 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 30 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 22 minutes
  - PASS 19 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 26 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 30 minutes
- 2026-03-02 PASS 20 minutes
- 2026-03-03 PASS 24 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
