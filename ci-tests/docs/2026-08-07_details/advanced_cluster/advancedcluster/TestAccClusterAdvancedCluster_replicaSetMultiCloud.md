# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057550000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.07s
[2026-07-10 00:49](#error-2026-07-10t0049520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5044fbaea6151790a5031b/clusters/test-acc-tf-c-6803202213866043166 | dev | flaky_500 | 5518.06s
[2026-07-11 00:52](#error-2026-07-11t0052520000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 3.05s
[2026-07-21 00:53](#error-2026-07-21t0053030000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s
[2026-07-23 00:49](#error-2026-07-23t0049330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:55+00:00
```
2026-07-09T00:57:55.0140927Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-09T00:58:24.4648496Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-09T00:58:27.0780698Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-09T00:58:27.0782303Z     resource_test.go:153: Step 1/3 error: Error running apply: exit status 1
2026-07-09T00:58:27.0783471Z         
2026-07-09T00:58:27.0784906Z         Error: error creating project: test-acc-tf-p-3584690068280582998
2026-07-09T00:58:27.0786032Z         
2026-07-09T00:58:27.0786941Z           with mongodbatlas_project.cluster_project,
2026-07-09T00:58:27.0788541Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-09T00:58:27.0789816Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-09T00:58:27.0790683Z         
2026-07-09T00:58:27.0791708Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-09T00:58:27.0792918Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-09T00:58:27.0794158Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-09T00:58:27.0795585Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-09T00:58:27.0796319Z         BadRequestDetail: 
2026-07-09T00:58:27.1389524Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (2.68s)
```

- 2026-07-10

### Error 2026-07-10T00:49:52+00:00
```
2026-07-10T00:49:52.1600435Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-10T01:03:50.4737177Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-10T02:35:48.2711861Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-10T02:35:48.2712597Z     resource_test.go:153: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:35:48.2713113Z         
2026-07-10T02:35:48.2713389Z         Error: Error in delete
2026-07-10T02:35:48.2713661Z         
2026-07-10T02:35:48.2714111Z         cluster name: test-acc-tf-c-6803202213866043166, API error details:
2026-07-10T02:35:48.2715201Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5044fbaea6151790a5031b/clusters/test-acc-tf-c-6803202213866043166
2026-07-10T02:35:48.2716076Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:35:48.2716732Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:35:48.2717183Z         BadRequestDetail: 
2026-07-10T02:35:48.2717592Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (5518.62s)
```

- 2026-07-11

### Error 2026-07-11T00:52:52+00:00
```
2026-07-11T00:52:52.0648355Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-11T00:56:44.4822917Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-11T00:56:47.7620979Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-11T00:56:47.7621702Z     resource_test.go:153: Step 1/3 error: Error running apply: exit status 1
2026-07-11T00:56:47.7622237Z         
2026-07-11T00:56:47.7622731Z         Error: error creating project: test-acc-tf-p-5265283867202317562
2026-07-11T00:56:47.7623171Z         
2026-07-11T00:56:47.7623751Z           with mongodbatlas_project.cluster_project,
2026-07-11T00:56:47.7624583Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-11T00:56:47.7625469Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-11T00:56:47.7625835Z         
2026-07-11T00:56:47.7626345Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-11T00:56:47.7627038Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-11T00:56:47.7627703Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-11T00:56:47.7628636Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-11T00:56:47.7629089Z         BadRequestDetail: 
2026-07-11T00:56:47.8099114Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (3.48s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS an hour
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS an hour
- 2026-07-18 PASS 54 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:03+00:00
```
2026-07-21T00:53:03.4328771Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-21T00:53:23.4308522Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-21T00:53:25.3661391Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-21T00:53:25.3662364Z     resource_test.go:153: Step 1/3 error: Error running apply: exit status 1
2026-07-21T00:53:25.3662999Z         
2026-07-21T00:53:25.3663661Z         Error: error creating project: test-acc-tf-p-5328061510801094876
2026-07-21T00:53:25.3664243Z         
2026-07-21T00:53:25.3664819Z           with mongodbatlas_project.cluster_project,
2026-07-21T00:53:25.3665970Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-21T00:53:25.3667323Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-21T00:53:25.3667891Z         
2026-07-21T00:53:25.3668703Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:53:25.3669841Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:53:25.3671467Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:53:25.3672544Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:53:25.3681341Z         BadRequestDetail: 
2026-07-21T00:53:25.4201777Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (1.99s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:33+00:00
```
2026-07-23T00:49:33.9193792Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-23T00:49:49.7209617Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-23T00:49:51.7279618Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-07-23T00:49:51.7282615Z     resource_test.go:153: Step 1/3 error: Error running apply: exit status 1
2026-07-23T00:49:51.7283610Z         
2026-07-23T00:49:51.7284617Z         Error: error creating project: test-acc-tf-p-6829339802302760503
2026-07-23T00:49:51.7285491Z         
2026-07-23T00:49:51.7286266Z           with mongodbatlas_project.cluster_project,
2026-07-23T00:49:51.7326819Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-23T00:49:51.7328568Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-23T00:49:51.7329222Z         
2026-07-23T00:49:51.7330346Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:49:51.7334508Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:49:51.7336479Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:49:51.7338069Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:49:51.7355630Z         BadRequestDetail: 
2026-07-23T00:49:51.7848457Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (2.07s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 2 hours
- 2026-07-29 PASS an hour
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 49 minutes
  - PASS 38 minutes
- 2026-08-01 PASS 45 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 44 minutes
- 2026-08-04 PASS 42 minutes
- 2026-08-05 PASS 44 minutes
- 2026-08-06 PASS 45 minutes
- 2026-08-07 PASS 50 minutes

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
  - PASS 59 minutes
  - PASS 41 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 58 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 53 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 47 minutes
  - PASS 51 minutes
- 2026-07-30 PASS 43 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 40 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
