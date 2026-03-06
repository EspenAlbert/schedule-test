# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037050000) |  | dev | flaky_500 | 1235.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS an hour
- 2026-02-06 PASS an hour
- 2026-02-07 PASS an hour
- 2026-02-08: MISSING
- 2026-02-09 PASS an hour
- 2026-02-10 PASS an hour
- 2026-02-11 PASS an hour
- 2026-02-12 PASS an hour
- 2026-02-13 PASS an hour
- 2026-02-14 PASS an hour
- 2026-02-15: MISSING
- 2026-02-16 PASS an hour
- 2026-02-17 PASS an hour
- 2026-02-18 PASS an hour
- 2026-02-19 PASS an hour
- 2026-02-20 PASS an hour
- 2026-02-21 PASS an hour
- 2026-02-22: MISSING
- 2026-02-23 PASS an hour
- 2026-02-24

### Error 2026-02-24T00:37:05+00:00
```
2026-02-24T00:37:05.0253077Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-24T00:40:00.5613606Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-24T00:40:45.5567648Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-24T00:40:45.5569589Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:45.556496013Z, ProjectID: 699cf2abae2412ce6211b9c0, Cluster name: test-acc-tf-c-7004346955333705883
2026-02-24T00:57:30.9735508Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-02-24T00:57:30.9736218Z     resource_test.go:72: Step 1/4 error: Error running post-apply non-refresh plan: exit status 1
2026-02-24T00:57:30.9736684Z         
2026-02-24T00:57:30.9737031Z         Error: error reading Advanced Configuration
2026-02-24T00:57:30.9737328Z         
2026-02-24T00:57:30.9737679Z           with data.mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:30.9738331Z           on terraform_plugin_test.tf line 38, in data "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:30.9738922Z           38: 	data "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:30.9739232Z         
2026-02-24T00:57:30.9739668Z         cluster name: test-acc-tf-c-7004346955333705883, API error details: (503
2026-02-24T00:57:30.9740349Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:30.9740749Z         
2026-02-24T00:57:30.9741063Z         Error: error reading Advanced Configuration
2026-02-24T00:57:30.9741356Z         
2026-02-24T00:57:30.9741706Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:30.9742814Z           on terraform_plugin_test.tf line 44, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:30.9743456Z           44: 	data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:30.9743769Z         
2026-02-24T00:57:30.9744215Z         cluster name: test-acc-tf-c-3130186782105040419, API error details: (503
2026-02-24T00:57:30.9744878Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:00:36.1585099Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (1235.60s)
```

- 2026-02-25 PASS an hour
- 2026-02-26 PASS an hour
- 2026-02-27 PASS an hour
- 2026-02-28 PASS an hour
- 2026-03-01: MISSING
- 2026-03-02
  - PASS an hour
  - PASS an hour
- 2026-03-03 PASS an hour
- 2026-03-04 PASS an hour
- 2026-03-05 PASS an hour
- 2026-03-06 PASS an hour

## QA Environment
### Timeline
- 2026-02-04 PASS 54 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 56 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS an hour
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 55 minutes
  - PASS 53 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 59 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS an hour
- 2026-03-02 PASS 53 minutes
- 2026-03-03 PASS 59 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
