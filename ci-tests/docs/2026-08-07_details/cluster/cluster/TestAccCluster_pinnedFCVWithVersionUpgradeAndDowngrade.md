# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:55](#error-2026-07-09t0055380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.08s
[2026-07-11 00:43](#error-2026-07-11t0043200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 101.07s
[2026-07-21 00:52](#error-2026-07-21t0052330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.06s
[2026-07-23 00:48](#error-2026-07-23t0048240000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:55:38+00:00
```
2026-07-09T00:55:38.8821810Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-09T00:55:38.8824068Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-09T00:56:49.5918114Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-09T00:56:49.5919108Z     resource_cluster_test.go:1351: Step 1/7 error: Error running apply: exit status 1
2026-07-09T00:56:49.5919641Z         
2026-07-09T00:56:49.5920099Z         Error: error creating project: test-acc-tf-p-1754355743831135865
2026-07-09T00:56:49.5920482Z         
2026-07-09T00:56:49.5920803Z           with mongodbatlas_project.test,
2026-07-09T00:56:49.5921588Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:56:49.5922241Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:56:49.5922863Z         
2026-07-09T00:56:49.5923374Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:56:49.5924048Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:56:49.5924662Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:56:49.6394546Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (70.76s)
```

- 2026-07-10 PASS an hour
- 2026-07-11

### Error 2026-07-11T00:43:20+00:00
```
2026-07-11T00:43:20.5971014Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-11T00:43:20.5974388Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-11T00:44:28.3482711Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-11T00:44:28.3483460Z     resource_cluster_test.go:1351: Step 1/7 error: Error running apply: exit status 1
2026-07-11T00:44:28.3483860Z         
2026-07-11T00:44:28.3484262Z         Error: error creating project: test-acc-tf-p-409827977425762339
2026-07-11T00:44:28.3484612Z         
2026-07-11T00:44:28.3484918Z           with mongodbatlas_project.test,
2026-07-11T00:44:28.3485468Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:44:28.3486240Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:44:28.3486543Z         
2026-07-11T00:44:28.3486972Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:44:28.3487595Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:44:28.3488262Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:28.3933486Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (67.80s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 42 minutes
- 2026-07-14 PASS 38 minutes
- 2026-07-15 PASS 38 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 39 minutes
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.3835747Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-18T00:49:47.3903379Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-18T00:51:29.0677812Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-18T00:51:29.0678708Z     resource_cluster_test.go:1351: Step 1/7 error: Error running apply: exit status 1
2026-07-18T00:51:29.0679392Z         
2026-07-18T00:51:29.0680053Z         Error: error creating project: test-acc-tf-p-5748624735652549255
2026-07-18T00:51:29.0680525Z         
2026-07-18T00:51:29.0680909Z           with mongodbatlas_project.test,
2026-07-18T00:51:29.0681979Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:51:29.0682972Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:51:29.0683363Z         
2026-07-18T00:51:29.0683955Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:29.0684768Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:29.0685438Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:29.1196227Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (101.73s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:33+00:00
```
2026-07-21T00:52:33.5575499Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-21T00:52:33.5666970Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-21T00:52:35.1032317Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-21T00:52:35.1033281Z     resource_cluster_test.go:1351: Step 1/7 error: Error running apply: exit status 1
2026-07-21T00:52:35.1033733Z         
2026-07-21T00:52:35.1034180Z         Error: error creating project: test-acc-tf-p-8245112990960494809
2026-07-21T00:52:35.1034695Z         
2026-07-21T00:52:35.1035018Z           with mongodbatlas_project.test,
2026-07-21T00:52:35.1035903Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:52:35.1036540Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:52:35.1036858Z         
2026-07-21T00:52:35.1037363Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:52:35.1038093Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:52:35.1038794Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:52:35.1039466Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:52:35.1039923Z         BadRequestDetail: 
2026-07-21T00:52:35.1498178Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1.61s)
```

- 2026-07-22 PASS 59 minutes
- 2026-07-23

### Error 2026-07-23T00:48:24+00:00
```
2026-07-23T00:48:24.6499024Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-23T00:48:24.6505735Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-23T00:48:26.3219224Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-23T00:48:26.3220190Z     resource_cluster_test.go:1351: Step 1/7 error: Error running apply: exit status 1
2026-07-23T00:48:26.3220753Z         
2026-07-23T00:48:26.3221216Z         Error: error creating project: test-acc-tf-p-4825472107788839145
2026-07-23T00:48:26.3221600Z         
2026-07-23T00:48:26.3222143Z           with mongodbatlas_project.test,
2026-07-23T00:48:26.3222843Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:48:26.3223484Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:48:26.3223940Z         
2026-07-23T00:48:26.3224562Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:48:26.3225248Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:48:26.3225912Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:48:26.3226550Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:48:26.3226981Z         BadRequestDetail: 
2026-07-23T00:48:26.3638512Z   
2026-07-23T00:48:26.3788970Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1.73s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 38 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 40 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 33 minutes
- 2026-08-01 PASS 30 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 31 minutes
- 2026-08-04 PASS 32 minutes
- 2026-08-05 PASS 31 minutes
- 2026-08-06 PASS 30 minutes
- 2026-08-07 PASS 30 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 39 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 38 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 42 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 36 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 30 minutes
  - PASS 33 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 31 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
