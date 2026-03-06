# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037080000) |  | dev | flaky_500 | 1026.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 39 minutes
- 2026-02-06 PASS 43 minutes
- 2026-02-07 PASS 38 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 40 minutes
- 2026-02-10 PASS 39 minutes
- 2026-02-11 PASS 38 minutes
- 2026-02-12 PASS 39 minutes
- 2026-02-13 PASS 40 minutes
- 2026-02-14 PASS 42 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 41 minutes
- 2026-02-17 PASS 41 minutes
- 2026-02-18 PASS 42 minutes
- 2026-02-19 PASS 52 minutes
- 2026-02-20 PASS 42 minutes
- 2026-02-21 PASS 39 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 41 minutes
- 2026-02-24

### Error 2026-02-24T00:37:08+00:00
```
2026-02-24T00:37:08.6994784Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-02-24T00:40:00.5495705Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2026-02-24T00:40:10.5521419Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-02-24T00:40:10.5525470Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:10.551913393Z, ProjectID: 699cf2b18dfec41eaa8533ad, Cluster name: test-acc-tf-c-9160167003111444034
2026-02-24T00:57:07.1036156Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-02-24T00:57:07.1036929Z     resource_test.go:369: Step 1/3 error: Error running apply: exit status 1
2026-02-24T00:57:07.1037399Z         
2026-02-24T00:57:07.1037840Z         Error: Error in update advanced configuration
2026-02-24T00:57:07.1038143Z         
2026-02-24T00:57:07.1038632Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:07.1039427Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:07.1040216Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:07.1040541Z         
2026-02-24T00:57:07.1041121Z         cluster name: test-acc-tf-c-9160167003111444034, API error details: (503
2026-02-24T00:57:07.1041916Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:07.1489476Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (1026.60s)
```

- 2026-02-25 PASS 44 minutes
- 2026-02-26 PASS 48 minutes
- 2026-02-27 PASS 40 minutes
- 2026-02-28 PASS 51 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 38 minutes
  - PASS 41 minutes
- 2026-03-03 PASS 43 minutes
- 2026-03-04 PASS 41 minutes
- 2026-03-05 PASS 53 minutes
- 2026-03-06 PASS 54 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 30 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 34 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 39 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 33 minutes
  - PASS 30 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 36 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 39 minutes
- 2026-03-02 PASS 29 minutes
- 2026-03-03 PASS 33 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
