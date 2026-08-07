# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058060000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.06s
[2026-07-11 00:55](#error-2026-07-11t0055140000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 4.02s
[2026-07-21 00:53](#error-2026-07-21t0053120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.01s
[2026-07-23 00:49](#error-2026-07-23t0049390000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:06+00:00
```
2026-07-09T00:58:06.0781035Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-09T00:58:24.4855709Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-09T00:58:25.2245251Z   diagnostic_detail=
2026-07-09T00:58:25.2302690Z    diagnostic_severity=ERROR
2026-07-09T00:58:27.0293327Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-09T00:58:27.0295651Z     resource_test.go:742: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-09T00:58:27.0309513Z         
2026-07-09T00:58:27.0319810Z         Error: error creating project: test-acc-tf-p-8020774204332965650
2026-07-09T00:58:27.0321378Z         
2026-07-09T00:58:27.0321886Z           with mongodbatlas_project.cluster_project,
2026-07-09T00:58:27.0323075Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-09T00:58:27.0324088Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-09T00:58:27.0324863Z         
2026-07-09T00:58:27.0325560Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-09T00:58:27.0326822Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-09T00:58:27.0328092Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-09T00:58:27.0329388Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-09T00:58:27.0330202Z         BadRequestDetail: 
2026-07-09T00:58:27.0951094Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (2.62s)
```

- 2026-07-10 PASS 9 seconds
- 2026-07-11

### Error 2026-07-11T00:55:14+00:00
```
2026-07-11T00:55:14.7544938Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-11T00:56:44.5238916Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-11T00:56:48.4844441Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-11T00:56:48.4846050Z     resource_test.go:742: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-11T00:56:48.4846967Z         
2026-07-11T00:56:48.4847701Z         Error: error creating project: test-acc-tf-p-7927698295472872883
2026-07-11T00:56:48.4848100Z         
2026-07-11T00:56:48.4848494Z           with mongodbatlas_project.cluster_project,
2026-07-11T00:56:48.4849585Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-11T00:56:48.4850380Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-11T00:56:48.4850853Z         
2026-07-11T00:56:48.4851544Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-11T00:56:48.4852531Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-11T00:56:48.4853821Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-11T00:56:48.4854939Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-11T00:56:48.4855667Z         BadRequestDetail: 
2026-07-11T00:56:48.4897009Z   
2026-07-11T00:56:48.5566947Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (4.23s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 9 seconds
- 2026-07-14 PASS 15 seconds
- 2026-07-15 PASS 13 seconds
- 2026-07-16 PASS 14 seconds
- 2026-07-17 PASS 9 seconds
- 2026-07-18 PASS 10 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:12+00:00
```
2026-07-21T00:53:12.2194066Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-21T00:53:23.4335369Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-21T00:53:25.4968973Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-21T00:53:25.4970177Z     resource_test.go:742: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-21T00:53:25.4970717Z         
2026-07-21T00:53:25.4971277Z         Error: error creating project: test-acc-tf-p-1237032621198378395
2026-07-21T00:53:25.4971740Z         
2026-07-21T00:53:25.4972212Z           with mongodbatlas_project.cluster_project,
2026-07-21T00:53:25.4973030Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-21T00:53:25.4973715Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-21T00:53:25.4974064Z         
2026-07-21T00:53:25.4974564Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:53:25.4975256Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:53:25.4976096Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:53:25.4976759Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:53:25.4977219Z         BadRequestDetail: 
2026-07-21T00:53:25.5467321Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (2.11s)
```

- 2026-07-22 PASS 10 seconds
- 2026-07-23

### Error 2026-07-23T00:49:39+00:00
```
2026-07-23T00:49:39.4246495Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-23T00:49:49.7214311Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-23T00:49:51.6434027Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-23T00:49:51.6434997Z     resource_test.go:742: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-23T00:49:51.6435589Z         
2026-07-23T00:49:51.6436126Z         Error: error creating project: test-acc-tf-p-8117489391652576830
2026-07-23T00:49:51.6436596Z         
2026-07-23T00:49:51.6436966Z           with mongodbatlas_project.cluster_project,
2026-07-23T00:49:51.6437875Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-23T00:49:51.6438996Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-23T00:49:51.6439373Z         
2026-07-23T00:49:51.6440037Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:49:51.6440763Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:49:51.6441554Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:49:51.6442668Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:49:51.6443127Z         BadRequestDetail: 
2026-07-23T00:49:51.6560444Z    test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-23T00:49:51.7459997Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (2.03s)
```

- 2026-07-24 PASS 10 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29 PASS 10 seconds
- 2026-07-30 PASS 9 seconds
- 2026-07-31
  - PASS 9 seconds
  - PASS 9 seconds
- 2026-08-01 PASS 9 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 9 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 5 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 8 seconds
  - PASS 10 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 9 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 12 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 4 seconds
- 2026-07-30 PASS 15 seconds
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
