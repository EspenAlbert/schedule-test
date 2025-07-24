# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 02:02](#error-2025-06-29t0202460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860911949709c3a5a3cba0d/limits | qa | flaky_500 | 1214.05s
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0f0006d8d55bb9e962c/limits | qa | flaky_500 | 37.06s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6873058a006d8d55bbaa4fb1/limits | qa | flaky_500 | 39.01s
[2025-07-23 17:30](#error-2025-07-23t1730380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68810ea4612d2a23cda4b1ba/limits | qa | flaky_500 | 1223.04s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 41 minutes
- 2025-06-26
  - PASS 49 minutes
  - PASS 40 minutes
- 2025-06-27 PASS 56 minutes
- 2025-06-28 PASS 43 minutes
- 2025-06-29

### Error 2025-06-29T02:02:46+00:00
```
2025-06-29T02:02:46.2858130Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-29T02:02:46.2905081Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-29T02:02:46.3053039Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-06-29T02:02:46.3053870Z     resource_advanced_cluster_test.go:862: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-06-29T02:02:46.3054328Z         
2025-06-29T02:02:46.3054692Z         Error: error when getting project properties after create
2025-06-29T02:02:46.3055011Z         
2025-06-29T02:02:46.3055337Z           with mongodbatlas_project.cluster_project,
2025-06-29T02:02:46.3055973Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-29T02:02:46.3056555Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-29T02:02:46.3056851Z         
2025-06-29T02:02:46.3057276Z         error getting project (6860911949709c3a5a3cba0d): error getting project's
2025-06-29T02:02:46.3057710Z         limits (6860911949709c3a5a3cba0d):
2025-06-29T02:02:46.3058265Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860911949709c3a5a3cba0d/limits
2025-06-29T02:02:46.3058904Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T02:02:46.3059596Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T02:02:46.3060081Z         BadRequestDetail: 
2025-06-29T02:02:46.3134928Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (1214.53s)
```

- 2025-06-30 PASS 43 minutes
- 2025-07-01
  - PASS 44 minutes
  - PASS 41 minutes
  - PASS 42 minutes
  - PASS 42 minutes
  - PASS an hour
- 2025-07-02 PASS 43 minutes
- 2025-07-03 PASS 45 minutes
- 2025-07-04 PASS 44 minutes
- 2025-07-05 PASS 44 minutes
- 2025-07-06 PASS 39 minutes
- 2025-07-07 PASS 42 minutes
- 2025-07-08 PASS 51 minutes
- 2025-07-09 PASS 43 minutes
- 2025-07-10
  - PASS 44 minutes
  - FAIL 37 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7764714Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-10T14:35:50.7813906Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-10T14:35:50.7973636Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-10T14:35:50.7974564Z     resource_advanced_cluster_test.go:862: Step 1/4 error: Error running apply: exit status 1
2025-07-10T14:35:50.7974970Z         
2025-07-10T14:35:50.7975551Z         Error: error when getting project properties after create
2025-07-10T14:35:50.7975999Z         
2025-07-10T14:35:50.7976410Z           with mongodbatlas_project.cluster_project,
2025-07-10T14:35:50.7977200Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T14:35:50.7977901Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-10T14:35:50.7978199Z         
2025-07-10T14:35:50.7978737Z         error getting project (686fc0f0006d8d55bb9e962c): error getting project's
2025-07-10T14:35:50.7979421Z         limits (686fc0f0006d8d55bb9e962c):
2025-07-10T14:35:50.7980019Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0f0006d8d55bb9e962c/limits
2025-07-10T14:35:50.7980784Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.7981459Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.7981920Z         BadRequestDetail: 
2025-07-10T14:35:50.7990764Z    test_step_number=1
2025-07-10T14:35:50.7999834Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (37.60s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 46 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2203185Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-13T02:11:00.2261308Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-13T02:11:00.2580379Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-13T02:11:00.2581151Z     resource_advanced_cluster_test.go:862: Step 1/4 error: Error running apply: exit status 1
2025-07-13T02:11:00.2581553Z         
2025-07-13T02:11:00.2581911Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2582222Z         
2025-07-13T02:11:00.2582541Z           with mongodbatlas_project.cluster_project,
2025-07-13T02:11:00.2583223Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T02:11:00.2583802Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T02:11:00.2584098Z         
2025-07-13T02:11:00.2584517Z         error getting project (6873058a006d8d55bbaa4fb1): error getting project's
2025-07-13T02:11:00.2584949Z         limits (6873058a006d8d55bbaa4fb1):
2025-07-13T02:11:00.2585490Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873058a006d8d55bbaa4fb1/limits
2025-07-13T02:11:00.2586130Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2586683Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2587053Z         BadRequestDetail: 
2025-07-13T02:11:00.2587718Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (39.08s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 46 minutes
- 2025-07-16 PASS 42 minutes
- 2025-07-17 PASS 43 minutes
- 2025-07-18 PASS 52 minutes
- 2025-07-19 PASS 43 minutes
- 2025-07-20 PASS 44 minutes
- 2025-07-21 PASS 40 minutes
- 2025-07-22 PASS 41 minutes
- 2025-07-23
  - PASS 40 minutes
  - PASS 41 minutes
  - PASS 42 minutes
  - FAIL 20 minutes

### Error 2025-07-23T17:30:38+00:00
```
2025-07-23T17:30:38.7610705Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-23T17:30:38.7694248Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-23T17:30:38.7950353Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-07-23T17:30:38.7951181Z     resource_advanced_cluster_test.go:862: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T17:30:38.7951636Z         
2025-07-23T17:30:38.7951997Z         Error: error when getting project properties after create
2025-07-23T17:30:38.7952314Z         
2025-07-23T17:30:38.7952636Z           with mongodbatlas_project.cluster_project,
2025-07-23T17:30:38.7953266Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T17:30:38.7953850Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-23T17:30:38.7954151Z         
2025-07-23T17:30:38.7954571Z         error getting project (68810ea4612d2a23cda4b1ba): error getting project's
2025-07-23T17:30:38.7955015Z         limits (68810ea4612d2a23cda4b1ba):
2025-07-23T17:30:38.7955565Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68810ea4612d2a23cda4b1ba/limits
2025-07-23T17:30:38.7956212Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T17:30:38.7956775Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T17:30:38.7957146Z         BadRequestDetail: 
2025-07-23T17:30:38.7966395Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (1223.36s)
```

- 2025-07-24 PASS 43 minutes