# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-8611137090907669011 | dev | flaky_500 | 301.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 27 minutes
  - PASS 24 minutes
- 2025-12-11 PASS 26 minutes
- 2025-12-12 PASS 26 minutes
- 2025-12-13 PASS 25 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 23 minutes
- 2025-12-16 PASS 23 minutes
- 2025-12-17 PASS 28 minutes
- 2025-12-18 PASS 26 minutes
- 2025-12-19 PASS 23 minutes
- 2025-12-20 PASS 24 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 29 minutes
- 2025-12-23 PASS 24 minutes
- 2025-12-24 PASS 29 minutes
- 2025-12-25 PASS 31 minutes
- 2025-12-26 PASS 24 minutes
- 2025-12-27 PASS 22 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 22 minutes
- 2025-12-31 PASS 29 minutes
- 2026-01-01 PASS 25 minutes
- 2026-01-02 PASS 28 minutes
- 2026-01-03 PASS 22 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 24 minutes
- 2026-01-06 PASS 22 minutes
- 2026-01-07

### Error 2026-01-07T00:30:39+00:00
```
2026-01-07T00:30:39.8816316Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-01-07T00:30:39.8948399Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-01-07T00:30:43.4229903Z    test_name=TestAccCluster_WithTags test_terraform_path=/home/runner/work/_temp/50a2f82a-27b1-4d8a-a970-4f5fa4965667/terraform test_step_number=1 test_working_directory=/tmp/plugintest2856342790
2026-01-07T00:31:39.9130388Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-01-07T00:31:39.9133774Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:39.912762286Z, ProjectID: 695da92baf4f6cc389e7cd9f, Cluster name: test-acc-tf-c-8611137090907669011
2026-01-07T00:33:42.5198206Z    test_working_directory=/tmp/plugintest1894712338 test_terraform_path=/home/runner/work/_temp/50a2f82a-27b1-4d8a-a970-4f5fa4965667/terraform test_name=TestAccCluster_tenant
2026-01-07T00:35:41.0691370Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-01-07T00:35:41.0692172Z     resource_cluster_test.go:1260: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:35:41.0692955Z         
2026-01-07T00:35:41.0695960Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-8611137090907669011 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:35:41.0698043Z         
2026-01-07T00:35:41.0698563Z           with mongodbatlas_cluster.test,
2026-01-07T00:35:41.0699575Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-07T00:35:41.0700484Z           12: resource "mongodbatlas_cluster" "test" {
2026-01-07T00:35:41.0700966Z         
2026-01-07T00:35:41.1191849Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (301.22s)
```

- 2026-01-08 PASS 24 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 27 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 21 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 24 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 24 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
