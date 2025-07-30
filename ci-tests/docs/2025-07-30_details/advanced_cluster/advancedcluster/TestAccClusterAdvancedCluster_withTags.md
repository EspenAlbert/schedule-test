# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2) TIMEOUT
Success rate: 94.29%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 03:39](#error-2025-07-11t0339310000) |  | dev |  | 6532.00s
[2025-07-13 01:05](#error-2025-07-13t0105100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68730695006d8d55bbaa561d/limits | qa | flaky_500 | 1447.07s
[2025-07-27 01:03](#error-2025-07-27t0103200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857b20ea884d7234921664/limits | qa | flaky_500 | 1116.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 19 minutes
  - PASS 16 minutes
  - PASS 20 minutes
  - PASS 15 minutes
  - PASS 17 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 17 minutes
- 2025-07-05 PASS 15 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 17 minutes
- 2025-07-08 PASS 19 minutes
- 2025-07-09 PASS 18 minutes
- 2025-07-10 PASS 17 minutes
- 2025-07-11

### Error 2025-07-11T03:39:31+00:00
```
2025-07-11T03:39:31.0318823Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-11T03:41:02.0284608Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-11T05:29:53.6625765Z 		TestAccClusterAdvancedCluster_singleShardedMultiCloud (1h48m52s)
2025-07-11T05:29:53.6626250Z 		TestAccClusterAdvancedCluster_withLabels (1h48m52s)
2025-07-11T05:29:53.6626716Z 		TestAccClusterAdvancedCluster_withTags (1h48m52s)
```

- 2025-07-12 PASS 21 minutes
- 2025-07-13

### Error 2025-07-13T01:05:10+00:00
```
2025-07-13T01:05:10.6406970Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-13T01:06:24.6415848Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-13T01:19:33.3952905Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-07-13T01:19:33.3964952Z     resource_advanced_cluster_test.go:664: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-13T01:19:33.3966047Z         
2025-07-13T01:19:33.3966676Z         Error: error when getting project properties after create
2025-07-13T01:19:33.3967213Z         
2025-07-13T01:19:33.3967759Z           with mongodbatlas_project.cluster_project,
2025-07-13T01:19:33.3968862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T01:19:33.3969932Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-13T01:19:33.3970421Z         
2025-07-13T01:19:33.3971114Z         error getting project (68730695006d8d55bbaa561d): error getting project's
2025-07-13T01:19:33.3971851Z         limits (68730695006d8d55bbaa561d):
2025-07-13T01:19:33.3973006Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68730695006d8d55bbaa561d/limits
2025-07-13T01:19:33.3974384Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T01:19:33.3975348Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T01:19:33.3975972Z         BadRequestDetail: 
2025-07-13T01:26:26.3287481Z 2025/07/13 01:26:26 error setting `oplog_size_mb` for MongoDB Cluster (): 0
2025-07-13T01:26:26.3288326Z 2025/07/13 01:26:26 error setting `transaction_lifetime_limit_seconds` for MongoDB Cluster (): 0
2025-07-13T01:26:58.6836529Z 2025/07/13 01:26:58 error setting `oplog_size_mb` for MongoDB Cluster (): 0
2025-07-13T01:27:06.0312989Z   
2025-07-13T01:30:32.3598298Z --- FAIL: TestAccClusterAdvancedCluster_withTags (1447.72s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 18 minutes
- 2025-07-16 PASS 17 minutes
- 2025-07-17 PASS 18 minutes
- 2025-07-18 PASS 19 minutes
- 2025-07-19 PASS 19 minutes
- 2025-07-20 PASS 20 minutes
- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 16 minutes
- 2025-07-23
  - PASS 16 minutes
  - PASS 20 minutes
  - PASS 15 minutes
  - PASS 28 minutes
- 2025-07-24 PASS 18 minutes
- 2025-07-25 PASS 18 minutes
- 2025-07-26 PASS 20 minutes
- 2025-07-27

### Error 2025-07-27T01:03:20+00:00
```
2025-07-27T01:03:20.0810597Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-27T01:04:27.1027134Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-27T01:17:30.6302749Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-07-27T01:17:30.6303421Z     resource_advanced_cluster_test.go:664: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-27T01:17:30.6303884Z         
2025-07-27T01:17:30.6304253Z         Error: error when getting project properties after create
2025-07-27T01:17:30.6304568Z         
2025-07-27T01:17:30.6304894Z           with mongodbatlas_project.cluster_project,
2025-07-27T01:17:30.6305767Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-27T01:17:30.6306460Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-27T01:17:30.6306873Z         
2025-07-27T01:17:30.6307657Z         error getting project (68857b20ea884d7234921664): error getting project's
2025-07-27T01:17:30.6308426Z         limits (68857b20ea884d7234921664):
2025-07-27T01:17:30.6309094Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857b20ea884d7234921664/limits
2025-07-27T01:17:30.6309971Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T01:17:30.6310637Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T01:17:30.6311108Z         BadRequestDetail: 
2025-07-27T01:18:29.9090700Z    test_working_directory=/tmp/plugintest101423956 test_name=TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-27T01:23:03.5674617Z --- FAIL: TestAccClusterAdvancedCluster_withTags (1116.47s)
```

- 2025-07-28 PASS 18 minutes
- 2025-07-29 PASS 17 minutes
- 2025-07-30 PASS 18 minutes