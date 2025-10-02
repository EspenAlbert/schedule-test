# cluster/cluster/TestAccCluster_basicAWS_simple Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 10:40](#error-2025-10-01t1040510000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/68dd053126a9d22218935338/clusters | dev | 35.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 17 minutes
- 2025-09-04 PASS 17 minutes
- 2025-09-05 PASS 16 minutes
- 2025-09-06 PASS 18 minutes
- 2025-09-07 PASS 25 minutes
- 2025-09-08
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-09-09 PASS 18 minutes
- 2025-09-10 PASS 16 minutes
- 2025-09-11 PASS 16 minutes
- 2025-09-12 PASS 15 minutes
- 2025-09-13 PASS 29 minutes
- 2025-09-14 PASS 15 minutes
- 2025-09-15
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-09-16 PASS 15 minutes
- 2025-09-17 PASS 19 minutes
- 2025-09-18 PASS 24 minutes
- 2025-09-19 PASS 18 minutes
- 2025-09-20 PASS 17 minutes
- 2025-09-21 PASS 18 minutes
- 2025-09-22 PASS 16 minutes
- 2025-09-23 PASS 17 minutes
- 2025-09-24 PASS 18 minutes
- 2025-09-25 PASS 17 minutes
- 2025-09-26 PASS 17 minutes
- 2025-09-27 PASS 15 minutes
- 2025-09-28 PASS 15 minutes
- 2025-09-29 PASS 16 minutes
- 2025-09-30
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-10-01
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 13 minutes
  - FAIL 35 seconds

### Error 2025-10-01T10:40:51+00:00
```
2025-10-01T10:40:51.0525649Z === RUN   TestAccCluster_basicAWS_simple
2025-10-01T10:40:56.0047627Z === CONT  TestAccCluster_basicAWS_simple
2025-10-01T10:41:31.0077201Z === NAME  TestAccCluster_basicAWS_simple
2025-10-01T10:41:31.0079039Z     pre_check.go:32: Time before creating cluster: 2025-10-01T10:41:31.00746705Z, ProjectID: 68dd053126a9d22218935338, Cluster name: test-acc-tf-c-2305563449318315079
2025-10-01T10:41:31.7914537Z   
2025-10-01T10:41:31.7915226Z     resource_cluster_test.go:28: Step 1/3 error: Error running apply: exit status 1
2025-10-01T10:41:31.7915855Z         
2025-10-01T10:41:31.7918098Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68dd053126a9d22218935338/clusters: 403 (request "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies.
2025-10-01T10:41:31.7920310Z         
2025-10-01T10:41:31.7920612Z           with mongodbatlas_cluster.test,
2025-10-01T10:41:31.7921210Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-01T10:41:31.7921743Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-10-01T10:41:31.7922033Z         
2025-10-01T10:41:31.8380934Z --- FAIL: TestAccCluster_basicAWS_simple (35.84s)
```

  - PASS 16 minutes
  - PASS 13 minutes
- 2025-10-02 PASS 18 minutes