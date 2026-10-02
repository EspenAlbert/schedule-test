# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-03 00:44](#error-2026-09-03t0044270000) |  | dev | 3607.06s

### Timeline
- 2026-09-01: MISSING
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
- 2026-09-05 PASS 18 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 19 minutes
- 2026-09-08 PASS 20 minutes
- 2026-09-09 PASS 19 minutes
- 2026-09-10 PASS 17 minutes
- 2026-09-11
  - PASS an hour
  - PASS 19 minutes
- 2026-09-12 PASS 20 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 18 minutes
- 2026-09-15 PASS 19 minutes
- 2026-09-16 PASS 18 minutes
- 2026-09-17 PASS 17 minutes
- 2026-09-18 PASS 25 minutes
- 2026-09-19 PASS 22 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 19 minutes
- 2026-09-22
  - PASS 19 minutes
  - PASS 19 minutes
- 2026-09-23
  - PASS 19 minutes
  - PASS 17 minutes
- 2026-09-24 PASS 19 minutes
- 2026-09-25 PASS 29 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 17 minutes
- 2026-09-29
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 23 minutes
- 2026-09-30 PASS 18 minutes
- 2026-10-01 PASS 26 minutes
- 2026-10-02 PASS 19 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 18 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 17 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 19 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 21 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 18 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 18 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
