# cluster/cluster/TestAccCluster_basicAWS_simple Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 10:40](#error-2025-10-01t1040510000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/68dd053126a9d22218935338/clusters | dev | 35.08s

## Timeline
- 2025-09-30: MISSING
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
- 2025-10-03 PASS 15 minutes
- 2025-10-04 PASS 18 minutes
- 2025-10-05 PASS 13 minutes
- 2025-10-06 PASS 16 minutes
- 2025-10-07 PASS 17 minutes
- 2025-10-08 PASS 17 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 18 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 16 minutes
- 2025-10-14 PASS 27 minutes
- 2025-10-15 PASS 12 minutes
- 2025-10-16 PASS 21 minutes
- 2025-10-17 PASS 15 minutes
- 2025-10-18 PASS 16 minutes
- 2025-10-19 PASS 14 minutes
- 2025-10-20
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-10-21 PASS 15 minutes
- 2025-10-22
  - PASS 21 minutes
  - PASS 14 minutes
- 2025-10-23 PASS 20 minutes
- 2025-10-24 PASS 28 minutes
- 2025-10-25 PASS 14 minutes
- 2025-10-26 PASS 16 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 16 minutes
- 2025-10-29 PASS 20 minutes
- 2025-10-30 PASS 16 minutes