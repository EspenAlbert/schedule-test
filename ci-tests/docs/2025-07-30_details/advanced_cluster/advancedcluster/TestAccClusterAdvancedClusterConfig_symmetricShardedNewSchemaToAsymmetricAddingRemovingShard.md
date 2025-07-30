# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3) TIMEOUT
Success rate: 91.43%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 03:39](#error-2025-07-11t0339350000) |  | dev |  | 6532.00s
[2025-07-20 01:01](#error-2025-07-20t0101000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c4005426db7026b5b4795/limits | qa | flaky_500 | 37.00s
[2025-07-23 11:39](#error-2025-07-23t1139460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880ca3d0afa8a5c604f910a/limits | qa | flaky_500 | 1908.08s
[2025-07-27 01:03](#error-2025-07-27t0103230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857b1fea884d7234921514/limits | qa | flaky_500 | 1175.06s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 41 minutes
  - PASS 45 minutes
  - PASS 43 minutes
  - PASS 41 minutes
  - PASS 59 minutes
- 2025-07-02 PASS 41 minutes
- 2025-07-03 PASS 43 minutes
- 2025-07-04 PASS 44 minutes
- 2025-07-05 PASS 44 minutes
- 2025-07-06 PASS 37 minutes
- 2025-07-07 PASS 42 minutes
- 2025-07-08 PASS 44 minutes
- 2025-07-09 PASS 42 minutes
- 2025-07-10 PASS 44 minutes
- 2025-07-11

### Error 2025-07-11T03:39:35+00:00
```
2025-07-11T03:39:35.6987577Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-11T03:41:02.0612106Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-11T05:29:53.6618215Z 		TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (1h48m52s)
2025-07-11T05:29:53.6619472Z 		TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (1h48m52s)
2025-07-11T05:29:53.6620899Z 		TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (1h48m52s)
```

- 2025-07-12 PASS 57 minutes
- 2025-07-13 PASS 52 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 44 minutes
- 2025-07-16 PASS 42 minutes
- 2025-07-17 PASS 45 minutes
- 2025-07-18 PASS 45 minutes
- 2025-07-19 PASS 43 minutes
- 2025-07-20

### Error 2025-07-20T01:01:00+00:00
```
2025-07-20T01:01:00.7528102Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-20T01:01:52.4219747Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-20T01:02:29.3564016Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-20T01:02:29.3564909Z     resource_advanced_cluster_test.go:862: Step 1/4 error: Error running apply: exit status 1
2025-07-20T01:02:29.3565642Z         
2025-07-20T01:02:29.3566087Z         Error: error when getting project properties after create
2025-07-20T01:02:29.3566625Z         
2025-07-20T01:02:29.3568621Z           with mongodbatlas_project.cluster_project,
2025-07-20T01:02:29.3569814Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T01:02:29.3570864Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-20T01:02:29.3571384Z         
2025-07-20T01:02:29.3572115Z         error getting project (687c4005426db7026b5b4795): error getting project's
2025-07-20T01:02:29.3572871Z         limits (687c4005426db7026b5b4795):
2025-07-20T01:02:29.3573810Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c4005426db7026b5b4795/limits
2025-07-20T01:02:29.3574695Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T01:02:29.3575641Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T01:02:29.3576024Z         BadRequestDetail: 
2025-07-20T01:02:29.4108453Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (37.00s)
```

- 2025-07-21 PASS 43 minutes
- 2025-07-22 PASS 43 minutes
- 2025-07-23
  - PASS 38 minutes
  - FAIL 31 minutes

### Error 2025-07-23T11:39:46+00:00
```
2025-07-23T11:39:46.9289596Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-23T11:40:40.7523355Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-23T12:08:47.1025757Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-23T12:08:47.1026953Z     resource_advanced_cluster_test.go:862: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T12:08:47.1027561Z         
2025-07-23T12:08:47.1028022Z         Error: error when getting project properties after create
2025-07-23T12:08:47.1028445Z         
2025-07-23T12:08:47.1028870Z           with mongodbatlas_project.cluster_project,
2025-07-23T12:08:47.1029744Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T12:08:47.1030344Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-23T12:08:47.1030662Z         
2025-07-23T12:08:47.1031099Z         error getting project (6880ca3d0afa8a5c604f910a): error getting project's
2025-07-23T12:08:47.1031748Z         limits (6880ca3d0afa8a5c604f910a):
2025-07-23T12:08:47.1032315Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880ca3d0afa8a5c604f910a/limits
2025-07-23T12:08:47.1032972Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T12:08:47.1033530Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T12:08:47.1033905Z         BadRequestDetail: 
2025-07-23T12:12:29.5625224Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (1908.81s)
```

  - PASS 42 minutes
  - PASS 40 minutes
- 2025-07-24 PASS 43 minutes
- 2025-07-25 PASS 50 minutes
- 2025-07-26 PASS 47 minutes
- 2025-07-27

### Error 2025-07-27T01:03:23+00:00
```
2025-07-27T01:03:23.8265320Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-27T01:04:27.1368148Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-27T01:18:29.9091976Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-27T01:18:29.9093283Z     resource_advanced_cluster_test.go:862: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-27T01:18:29.9093802Z         
2025-07-27T01:18:29.9094227Z         Error: error when getting project properties after create
2025-07-27T01:18:29.9094780Z         
2025-07-27T01:18:29.9095210Z           with mongodbatlas_project.cluster_project,
2025-07-27T01:18:29.9095851Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-27T01:18:29.9096437Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-27T01:18:29.9096746Z         
2025-07-27T01:18:29.9097166Z         error getting project (68857b1fea884d7234921514): error getting project's
2025-07-27T01:18:29.9098156Z         limits (68857b1fea884d7234921514):
2025-07-27T01:18:29.9099118Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857b1fea884d7234921514/limits
2025-07-27T01:18:29.9100016Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T01:18:29.9100925Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T01:18:29.9101556Z         BadRequestDetail: 
2025-07-27T01:18:30.6841380Z    test_name=TestAccClusterAdvancedCluster_withLabels
2025-07-27T01:24:02.7497303Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (1175.64s)
```

- 2025-07-28 PASS 49 minutes
- 2025-07-29 PASS 49 minutes
- 2025-07-30 PASS 47 minutes