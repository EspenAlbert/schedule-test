# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-03 00:44](#error-2026-09-03t0044270000) |  | dev | 3607.06s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 22 minutes
- 2026-08-08 PASS 17 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 18 minutes
- 2026-08-11 PASS 18 minutes
- 2026-08-12 PASS 20 minutes
- 2026-08-13 PASS 18 minutes
- 2026-08-14 PASS 18 minutes
- 2026-08-15 PASS 19 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 19 minutes
- 2026-08-18 PASS 26 minutes
- 2026-08-19 PASS 18 minutes
- 2026-08-20 PASS 18 minutes
- 2026-08-21 PASS 19 minutes
- 2026-08-22 PASS 18 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 17 minutes
- 2026-08-25 PASS 19 minutes
- 2026-08-26 PASS 21 minutes
- 2026-08-27 PASS 20 minutes
- 2026-08-28 PASS 18 minutes
- 2026-08-29 PASS 19 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 21 minutes
- 2026-09-01 PASS 18 minutes
- 2026-09-02 PASS 19 minutes
- 2026-09-03
  - FAIL an hour

### Error 2026-09-03T00:44:27+00:00
```
2026-09-03T00:44:27.1555609Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-09-03T00:45:49.7427730Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-09-03T01:45:56.5642712Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-09-03T01:45:56.5643848Z     resource_test.go:1106: 
2026-09-03T01:45:56.5645985Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:1141
2026-09-03T01:45:56.5650166Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:1106
2026-09-03T01:45:56.5653399Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing_new.go:171
2026-09-03T01:45:56.5656144Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing.go:1021
2026-09-03T01:45:56.5656851Z         	Error:      	Should be false
2026-09-03T01:45:56.5657468Z         	Test:       	TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-09-03T01:45:56.6281353Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (3607.56s)
```

  - PASS 29 minutes
- 2026-09-04 PASS 29 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 17 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 19 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 18 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 18 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 20 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 18 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
