# cluster/cluster/TestAccCluster_withAutoScalingAWS Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-17 00:29](#error-2025-10-17t0029160000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/68f18dd865803f6549107d70/clusters | dev | 40.08s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 14 minutes
- 2025-10-16 PASS 32 minutes
- 2025-10-17

### Error 2025-10-17T00:29:16+00:00
```
2025-10-17T00:29:16.1576439Z === RUN   TestAccCluster_withAutoScalingAWS
2025-10-17T00:29:16.1700178Z === CONT  TestAccCluster_withAutoScalingAWS
2025-10-17T00:29:56.1769516Z === NAME  TestAccCluster_withAutoScalingAWS
2025-10-17T00:29:56.1771298Z     pre_check.go:36: Time before creating cluster: 2025-10-17T00:29:56.176705339Z, ProjectID: 68f18dd865803f6549107d70, Cluster name: test-acc-tf-c-6666401779969757049
2025-10-17T00:29:56.9257110Z   
2025-10-17T00:29:56.9257851Z     resource_cluster_test.go:982: Step 1/2 error: Error running apply: exit status 1
2025-10-17T00:29:56.9258520Z         
2025-10-17T00:29:56.9261368Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68f18dd865803f6549107d70/clusters: 403 (request "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies.
2025-10-17T00:29:56.9262890Z         
2025-10-17T00:29:56.9263206Z           with mongodbatlas_cluster.test,
2025-10-17T00:29:56.9263811Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-17T00:29:56.9264353Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-10-17T00:29:56.9264655Z         
2025-10-17T00:29:56.9710149Z --- FAIL: TestAccCluster_withAutoScalingAWS (40.81s)
```

- 2025-10-18 PASS 15 minutes
- 2025-10-19 PASS 12 minutes
- 2025-10-20
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-10-21 PASS 14 minutes
- 2025-10-22
  - PASS 21 minutes
  - PASS 13 minutes
- 2025-10-23 PASS 17 minutes
- 2025-10-24 PASS 16 minutes
- 2025-10-25 PASS 15 minutes
- 2025-10-26 PASS 13 minutes
- 2025-10-27 PASS 45 minutes
- 2025-10-28 PASS 14 minutes
- 2025-10-29 PASS 18 minutes
- 2025-10-30 PASS 14 minutes
- 2025-10-31 PASS 17 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 15 minutes
- 2025-11-03 PASS 14 minutes
- 2025-11-04 PASS 18 minutes
- 2025-11-05
  - PASS 19 minutes
  - PASS 13 minutes
- 2025-11-06 PASS 17 minutes
- 2025-11-07 PASS 16 minutes
- 2025-11-08 PASS 45 minutes
- 2025-11-09 PASS 12 minutes
- 2025-11-10 PASS 12 minutes
- 2025-11-11 PASS 14 minutes
- 2025-11-12 PASS 15 minutes
- 2025-11-13
  - PASS 26 minutes
  - PASS 13 minutes