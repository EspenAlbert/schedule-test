# cluster/cluster/TestAccCluster_partial_advancedConf Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da926af4f6cc389e78487/clusters/test-acc-tf-c-3025977166571272051 | dev | flaky_500 | 481.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-12-11 PASS 23 minutes
- 2025-12-12 PASS 22 minutes
- 2025-12-13 PASS 21 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 19 minutes
- 2025-12-16 PASS 19 minutes
- 2025-12-17 PASS 21 minutes
- 2025-12-18 PASS 22 minutes
- 2025-12-19 PASS 20 minutes
- 2025-12-20 PASS 20 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 22 minutes
- 2025-12-23 PASS 21 minutes
- 2025-12-24 PASS 22 minutes
- 2025-12-25 PASS 27 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 20 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 20 minutes
- 2025-12-31 PASS 21 minutes
- 2026-01-01 PASS 18 minutes
- 2026-01-02 PASS 21 minutes
- 2026-01-03 PASS 20 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 21 minutes
- 2026-01-06 PASS 19 minutes
- 2026-01-07

### Error 2026-01-07T00:30:32+00:00
```
2026-01-07T00:30:32.7372743Z === RUN   TestAccCluster_partial_advancedConf
2026-01-07T00:30:39.8825010Z === CONT  TestAccCluster_partial_advancedConf
2026-01-07T00:30:59.8893696Z === NAME  TestAccCluster_partial_advancedConf
2026-01-07T00:30:59.8895311Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:59.889088839Z, ProjectID: 695da926af4f6cc389e78487, Cluster name: test-acc-tf-c-3025977166571272051
2026-01-07T00:38:41.8274238Z === NAME  TestAccCluster_partial_advancedConf
2026-01-07T00:38:41.8274769Z     resource_cluster_test.go:82: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:38:41.8275351Z         
2026-01-07T00:38:41.8277106Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da926af4f6cc389e78487/clusters/test-acc-tf-c-3025977166571272051 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:38:41.8278265Z         
2026-01-07T00:38:41.8278567Z           with mongodbatlas_cluster.test,
2026-01-07T00:38:41.8279155Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-07T00:38:41.8279676Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-01-07T00:38:41.8279953Z         
2026-01-07T00:38:41.8716563Z --- FAIL: TestAccCluster_partial_advancedConf (481.99s)
```

- 2026-01-08 PASS 20 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 20 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 15 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 18 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 17 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
