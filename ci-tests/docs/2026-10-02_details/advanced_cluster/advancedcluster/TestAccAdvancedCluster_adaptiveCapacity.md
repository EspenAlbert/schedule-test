# advanced_cluster/advancedcluster/TestAccAdvancedCluster_adaptiveCapacity Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-29 10:44](#error-2026-09-29t1044580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6abb965705da69d77cf37f86/clusters/test-acc-tf-c-8303394727068245846 | dev | flaky_500 | 1594.08s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 41 minutes
- 2026-09-03
  - PASS 24 minutes
  - PASS 33 minutes
- 2026-09-04 PASS 31 minutes
- 2026-09-05 PASS 21 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 22 minutes
- 2026-09-08 PASS 17 minutes
- 2026-09-09 PASS 21 minutes
- 2026-09-10 PASS 20 minutes
- 2026-09-11
  - PASS an hour
  - PASS 17 minutes
- 2026-09-12 PASS 21 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 22 minutes
- 2026-09-15 PASS 23 minutes
- 2026-09-16 PASS 18 minutes
- 2026-09-17 PASS 20 minutes
- 2026-09-18 PASS 17 minutes
- 2026-09-19 PASS 23 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 21 minutes
- 2026-09-22
  - PASS 23 minutes
  - PASS 23 minutes
- 2026-09-23
  - PASS 17 minutes
  - PASS 17 minutes
- 2026-09-24 PASS 22 minutes
- 2026-09-25 PASS 20 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 25 minutes
- 2026-09-29
  - PASS 33 minutes
  - FAIL 26 minutes

### Error 2026-09-29T10:44:58+00:00
```
2026-09-29T10:44:58.1779999Z === RUN   TestAccAdvancedCluster_adaptiveCapacity
2026-09-29T10:44:58.2410696Z === CONT  TestAccAdvancedCluster_adaptiveCapacity
2026-09-29T10:45:28.1820865Z === NAME  TestAccAdvancedCluster_adaptiveCapacity
2026-09-29T10:45:28.1822503Z     pre_check.go:46: Time before creating cluster: 2026-09-29T10:45:28.181516549Z, ProjectID: 6abb965705da69d77cf37f86, Cluster name: test-acc-tf-c-8303394727068245846
2026-09-29T11:09:01.0229401Z === NAME  TestAccAdvancedCluster_adaptiveCapacity
2026-09-29T11:09:01.0230247Z     resource_test.go:3123: Step 3/6 error: Error running apply: exit status 1
2026-09-29T11:09:01.0230870Z         
2026-09-29T11:09:01.0231305Z         Error: Error in update
2026-09-29T11:09:01.0231895Z         
2026-09-29T11:09:01.0232453Z           with mongodbatlas_advanced_cluster.test,
2026-09-29T11:09:01.0233594Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-29T11:09:01.0234664Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-29T11:09:01.0235577Z         
2026-09-29T11:09:01.0236311Z         cluster name: test-acc-tf-c-8303394727068245846, API error details:
2026-09-29T11:09:01.0239412Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb965705da69d77cf37f86/clusters/test-acc-tf-c-8303394727068245846
2026-09-29T11:09:01.0240502Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-09-29T11:09:01.0241440Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-09-29T11:09:01.0242141Z         BadRequestDetail: 
2026-09-29T11:09:01.0252566Z    test_step_number=9
2026-09-29T11:11:32.9283705Z --- FAIL: TestAccAdvancedCluster_adaptiveCapacity (1594.75s)
```

  - PASS 19 minutes
- 2026-09-30 PASS 25 minutes
- 2026-10-01 PASS 36 minutes
- 2026-10-02 PASS 17 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 16 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 17 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 16 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 17 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 17 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 18 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
