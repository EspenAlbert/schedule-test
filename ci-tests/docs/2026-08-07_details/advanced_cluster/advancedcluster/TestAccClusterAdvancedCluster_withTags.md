# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058020000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.05s
[2026-07-11 00:55](#error-2026-07-11t0055110000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 3.06s
[2026-07-21 00:53](#error-2026-07-21t0053100000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 2.07s
[2026-07-23 00:49](#error-2026-07-23t0049380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:02+00:00
```
2026-07-09T00:58:02.4965329Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-07-09T00:58:24.4652784Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-07-09T00:58:26.9177574Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-07-09T00:58:26.9178135Z     resource_test.go:535: Step 1/4 error: Error running apply: exit status 1
2026-07-09T00:58:26.9178781Z         
2026-07-09T00:58:26.9179331Z         Error: error creating project: test-acc-tf-p-3611354981477552401
2026-07-09T00:58:26.9179723Z         
2026-07-09T00:58:26.9180095Z           with mongodbatlas_project.cluster_project,
2026-07-09T00:58:26.9180816Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-09T00:58:26.9181517Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-09T00:58:26.9181874Z         
2026-07-09T00:58:26.9182375Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-09T00:58:26.9183229Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-09T00:58:26.9183930Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-09T00:58:26.9184854Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-09T00:58:26.9185325Z         BadRequestDetail: 
2026-07-09T00:58:26.9674945Z --- FAIL: TestAccClusterAdvancedCluster_withTags (2.51s)
```

- 2026-07-10 PASS 46 minutes
- 2026-07-11

### Error 2026-07-11T00:55:11+00:00
```
2026-07-11T00:55:11.2759755Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-07-11T00:56:44.8237313Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-07-11T00:56:45.7215105Z   diagnostic_detail=
2026-07-11T00:56:45.7450544Z    diagnostic_severity=ERROR diagnostic_summary="Missing Configuration for Required Attribute" tf_resource_type=mongodbatlas_advanced_cluster tf_proto_version=6.11 diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" tf_rpc=ValidateResourceConfig tf_req_id=a98b3da1-cf6a-e79f-fc2c-2dfe3064b399 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-07-11T00:56:47.4978428Z   
2026-07-11T00:56:47.8699660Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-07-11T00:56:47.8700589Z     resource_test.go:535: Step 1/4 error: Error running apply: exit status 1
2026-07-11T00:56:47.8701267Z         
2026-07-11T00:56:47.8701984Z         Error: error creating project: test-acc-tf-p-7193562395284618510
2026-07-11T00:56:47.8702650Z         
2026-07-11T00:56:47.8703216Z           with mongodbatlas_project.cluster_project,
2026-07-11T00:56:47.8704599Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-11T00:56:47.8705730Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-11T00:56:47.8706273Z         
2026-07-11T00:56:47.8706793Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-11T00:56:47.8707508Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-11T00:56:47.8708197Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-11T00:56:47.8708860Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-11T00:56:47.8709313Z         BadRequestDetail: 
2026-07-11T00:56:47.9014074Z    test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData test_terraform_path=/home/runner/work/_temp/107bf09b-197f-496b-b565-3042ffdb9590/terraform test_working_directory=/tmp/plugintest1205965186
2026-07-11T00:56:47.9450447Z --- FAIL: TestAccClusterAdvancedCluster_withTags (3.60s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 45 minutes
- 2026-07-14 PASS 25 minutes
- 2026-07-15 PASS 26 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 33 minutes
- 2026-07-18 PASS 27 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:10+00:00
```
2026-07-21T00:53:10.0113882Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-07-21T00:53:23.4336302Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-07-21T00:53:24.1187105Z   diagnostic_detail=
2026-07-21T00:53:24.1256548Z    tf_rpc=ValidateResourceConfig tf_resource_type=mongodbatlas_advanced_cluster diagnostic_severity=ERROR tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11 tf_req_id=719d93fe-c357-278f-fc31-bb9dee2c4f44
2026-07-21T00:53:26.1027177Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-07-21T00:53:26.1027973Z     resource_test.go:535: Step 1/4 error: Error running apply: exit status 1
2026-07-21T00:53:26.1028392Z         
2026-07-21T00:53:26.1028841Z         Error: error creating project: test-acc-tf-p-4886940821034898325
2026-07-21T00:53:26.1029220Z         
2026-07-21T00:53:26.1029586Z           with mongodbatlas_project.cluster_project,
2026-07-21T00:53:26.1030759Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-21T00:53:26.1031447Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-21T00:53:26.1031814Z         
2026-07-21T00:53:26.1032318Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:53:26.1032995Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:53:26.1033652Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:53:26.1034560Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:53:26.1035006Z         BadRequestDetail: 
2026-07-21T00:53:26.1522003Z --- FAIL: TestAccClusterAdvancedCluster_withTags (2.72s)
```

- 2026-07-22 PASS 57 minutes
- 2026-07-23

### Error 2026-07-23T00:49:38+00:00
```
2026-07-23T00:49:38.0409069Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-07-23T00:49:49.7218913Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-07-23T00:49:51.6327526Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-07-23T00:49:51.6328086Z     resource_test.go:535: Step 1/4 error: Error running apply: exit status 1
2026-07-23T00:49:51.6328495Z         
2026-07-23T00:49:51.6328937Z         Error: error creating project: test-acc-tf-p-2910975535943817351
2026-07-23T00:49:51.6329374Z         
2026-07-23T00:49:51.6329795Z           with mongodbatlas_project.cluster_project,
2026-07-23T00:49:51.6330528Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-23T00:49:51.6331210Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-23T00:49:51.6331560Z         
2026-07-23T00:49:51.6332522Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:49:51.6333243Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:49:51.6333913Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:49:51.6334570Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:49:51.6335017Z         BadRequestDetail: 
2026-07-23T00:49:51.6433428Z   
2026-07-23T00:49:51.7357949Z --- FAIL: TestAccClusterAdvancedCluster_withTags (2.01s)
```

- 2026-07-24 PASS 42 minutes
- 2026-07-25 PASS 28 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 24 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 18 minutes
  - PASS 16 minutes
- 2026-08-01 PASS 16 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 17 minutes
- 2026-08-05 PASS 16 minutes
- 2026-08-06 PASS 17 minutes
- 2026-08-07 PASS 16 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 29 minutes
  - PASS 19 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 30 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 22 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 19 minutes
  - PASS 22 minutes
- 2026-07-30 PASS 20 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
