# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058060000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.07s
[2026-07-10 00:49](#error-2026-07-10t0049560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5044fbaea6151790a502dc/clusters/test-acc-tf-c-2010768871745762494 | dev | flaky_500 | 5917.07s
[2026-07-11 00:55](#error-2026-07-11t0055140000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 4.03s
[2026-07-21 00:53](#error-2026-07-21t0053120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.06s
[2026-07-23 00:49](#error-2026-07-23t0049390000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:06+00:00
```
2026-07-09T00:58:06.0778370Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-09T00:58:24.4770404Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-09T00:58:27.1115784Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-09T00:58:27.1117229Z     resource_test.go:682: Step 1/4 error: Error running apply: exit status 1
2026-07-09T00:58:27.1117990Z         
2026-07-09T00:58:27.1118789Z         Error: error creating project: test-acc-tf-p-5747062680260384121
2026-07-09T00:58:27.1119484Z         
2026-07-09T00:58:27.1120147Z           with mongodbatlas_project.cluster_project,
2026-07-09T00:58:27.1121493Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-09T00:58:27.1122745Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-09T00:58:27.1123353Z         
2026-07-09T00:58:27.1124520Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-09T00:58:27.1125840Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-09T00:58:27.1127093Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-09T00:58:27.1128275Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-09T00:58:27.1129092Z         BadRequestDetail: 
2026-07-09T00:58:27.1678733Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (2.70s)
```

- 2026-07-10

### Error 2026-07-10T00:49:56+00:00
```
2026-07-10T00:49:56.9587467Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-10T01:03:50.1133959Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-10T02:42:27.3452041Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-10T02:42:27.3452959Z     resource_test.go:682: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:42:27.3453483Z         
2026-07-10T02:42:27.3453756Z         Error: Error in delete
2026-07-10T02:42:27.3454017Z         
2026-07-10T02:42:27.3454465Z         cluster name: test-acc-tf-c-2010768871745762494, API error details:
2026-07-10T02:42:27.3455392Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5044fbaea6151790a502dc/clusters/test-acc-tf-c-2010768871745762494
2026-07-10T02:42:27.3456234Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:42:27.3456890Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:42:27.3463093Z         BadRequestDetail: 
2026-07-10T02:42:27.3463782Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (5917.73s)
```

- 2026-07-11

### Error 2026-07-11T00:55:14+00:00
```
2026-07-11T00:55:14.7541988Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-11T00:56:44.6266205Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-11T00:56:48.5994774Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-11T00:56:48.5996251Z     resource_test.go:682: Step 1/4 error: Error running apply: exit status 1
2026-07-11T00:56:48.5996836Z         
2026-07-11T00:56:48.5997526Z         Error: error creating project: test-acc-tf-p-6353910088036571440
2026-07-11T00:56:48.5997985Z         
2026-07-11T00:56:48.5998465Z           with mongodbatlas_project.cluster_project,
2026-07-11T00:56:48.5999607Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-11T00:56:48.6000802Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-11T00:56:48.6001344Z         
2026-07-11T00:56:48.6002166Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-11T00:56:48.6003173Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-11T00:56:48.6004423Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-11T00:56:48.6005630Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-11T00:56:48.6006370Z         BadRequestDetail: 
2026-07-11T00:56:48.6066040Z   
2026-07-11T00:56:48.6826704Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (4.34s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS an hour
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS an hour
- 2026-07-18 PASS 56 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:12+00:00
```
2026-07-21T00:53:12.2191486Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-21T00:53:23.4315918Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-21T00:53:25.9580943Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-21T00:53:25.9582243Z     resource_test.go:682: Step 1/4 error: Error running apply: exit status 1
2026-07-21T00:53:25.9582882Z         
2026-07-21T00:53:25.9583609Z         Error: error creating project: test-acc-tf-p-8299917782822397042
2026-07-21T00:53:25.9584235Z         
2026-07-21T00:53:25.9584848Z           with mongodbatlas_project.cluster_project,
2026-07-21T00:53:25.9586106Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-21T00:53:25.9587505Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-21T00:53:25.9588108Z         
2026-07-21T00:53:25.9588924Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:53:25.9590813Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:53:25.9592311Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:53:25.9593545Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:53:25.9594415Z         BadRequestDetail: 
2026-07-21T00:53:26.0186122Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (2.59s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:39+00:00
```
2026-07-23T00:49:39.4243625Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-23T00:49:49.7215815Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-23T00:49:51.7907904Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-07-23T00:49:51.7908808Z     resource_test.go:682: Step 1/4 error: Error running apply: exit status 1
2026-07-23T00:49:51.7909226Z         
2026-07-23T00:49:51.7909668Z         Error: error creating project: test-acc-tf-p-3098540998872478419
2026-07-23T00:49:51.7910064Z         
2026-07-23T00:49:51.7910438Z           with mongodbatlas_project.cluster_project,
2026-07-23T00:49:51.7911157Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-23T00:49:51.7912093Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-23T00:49:51.7912483Z         
2026-07-23T00:49:51.7912998Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:49:51.7913906Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:49:51.7914604Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:49:51.7915275Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:49:51.7915728Z         BadRequestDetail: 
2026-07-23T00:49:51.8402669Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (2.13s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 2 hours
- 2026-07-29 PASS an hour
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 51 minutes
  - PASS 51 minutes
- 2026-08-01 PASS 51 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 54 minutes
- 2026-08-04 PASS 54 minutes
- 2026-08-05 PASS 55 minutes
- 2026-08-06 PASS 52 minutes
- 2026-08-07 PASS an hour

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS an hour
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS an hour
  - PASS 54 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS an hour
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS an hour
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 55 minutes
  - PASS 56 minutes
- 2026-07-30 PASS 55 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 53 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
