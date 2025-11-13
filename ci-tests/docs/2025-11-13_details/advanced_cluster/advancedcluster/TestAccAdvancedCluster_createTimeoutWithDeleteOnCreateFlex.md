# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:31](#error-2025-11-02t0031200000) |  | qa | 5.01s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 5 seconds
- 2025-10-16 PASS 5 seconds
- 2025-10-17 PASS 4 seconds
- 2025-10-18 PASS 4 seconds
- 2025-10-19 PASS 5 seconds
- 2025-10-20
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-10-21 PASS 4 seconds
- 2025-10-22
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-10-23 PASS 4 seconds
- 2025-10-24 PASS 5 seconds
- 2025-10-25 PASS 4 seconds
- 2025-10-26 PASS 5 seconds
- 2025-10-27 PASS 5 seconds
- 2025-10-28 PASS 4 seconds
- 2025-10-29 PASS 5 seconds
- 2025-10-30 PASS 4 seconds
- 2025-10-31 PASS 5 seconds
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:31:20+00:00
```
2025-11-02T00:31:20.5600361Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-11-02T00:31:20.5859720Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-11-02T00:31:25.2302378Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-11-02T00:31:25.2304954Z     resource_test.go:2866: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-11-02T00:31:25.2306774Z         
2025-11-02T00:31:25.2309199Z         Error: error creating flex cluster: Cluster name test-acc-tf-8322910339756469691 (project_id=6906a6005ace12378d2965db).
2025-11-02T00:31:25.2311182Z         
2025-11-02T00:31:25.2326513Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.2328523Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.2330223Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.2331375Z         
2025-11-02T00:31:25.2332854Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a6005ace12378d2965db/flexClusters
2025-11-02T00:31:25.2334369Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.2336190Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.2337782Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.2339978Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.2341248Z         BadRequestDetail: 
2025-11-02T00:31:25.2654633Z    test_terraform_path=/home/runner/work/_temp/60a36c34-dbcd-44d9-9066-0019faa00ebd/terraform test_name=TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-11-02T00:31:25.6562038Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (5.08s)
```

- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 4 seconds
- 2025-11-05
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-11-06 PASS 4 seconds
- 2025-11-07 PASS 5 seconds
- 2025-11-08 PASS 4 seconds
- 2025-11-09 PASS 4 seconds
- 2025-11-10 PASS 5 seconds
- 2025-11-11 PASS 4 seconds
- 2025-11-12 PASS 5 seconds
- 2025-11-13
  - PASS 4 seconds
  - PASS 4 seconds