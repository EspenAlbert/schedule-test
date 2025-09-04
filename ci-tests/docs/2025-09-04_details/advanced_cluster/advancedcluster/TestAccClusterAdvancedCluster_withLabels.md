# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-09 00:28](#error-2025-08-09t0028530000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/6896968f18106a5d90267cfb/clusters | dev |  | 5.02s
[2025-08-11 00:32](#error-2025-08-11t0032310000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68993a62f3d97116eb64ee92/clusters | dev |  | 10.09s
[2025-08-17 00:31](#error-2025-08-17t0031430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a12337aafa9a76ca8bf150/limits | qa | flaky_500 | 2160.10s
[2025-09-01 00:30](#error-2025-09-01t0030420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 22 minutes
- 2025-08-07 PASS 43 minutes
- 2025-08-08 PASS 20 minutes
- 2025-08-09

### Error 2025-08-09T00:28:53+00:00
```
2025-08-09T00:28:53.7828219Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-08-09T00:30:06.8416953Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-08-09T00:30:11.5388673Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-08-09T00:30:11.5389716Z     resource_advanced_cluster_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-08-09T00:30:11.5390447Z         
2025-08-09T00:30:11.5394295Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6896968f18106a5d90267cfb/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-09T00:30:11.5396738Z         
2025-08-09T00:30:11.5397350Z           with mongodbatlas_advanced_cluster.test,
2025-08-09T00:30:11.5398505Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-09T00:30:11.5399565Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-09T00:30:11.5400121Z         
2025-08-09T00:30:12.0646058Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (5.22s)
```

- 2025-08-10 PASS 38 minutes
- 2025-08-11

### Error 2025-08-11T00:32:31+00:00
```
2025-08-11T00:32:31.8764490Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-08-11T00:33:33.4306518Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-08-11T00:33:43.7662484Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-08-11T00:33:43.7663357Z     resource_advanced_cluster_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-08-11T00:33:43.7663883Z         
2025-08-11T00:33:43.7666504Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68993a62f3d97116eb64ee92/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-11T00:33:43.7668459Z         
2025-08-11T00:33:43.7668784Z           with mongodbatlas_advanced_cluster.test,
2025-08-11T00:33:43.7669449Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-11T00:33:43.7670052Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-11T00:33:43.7670358Z         
2025-08-11T00:33:44.2898687Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (10.85s)
```

- 2025-08-12
  - PASS 24 minutes
  - PASS 17 minutes
- 2025-08-13 PASS 22 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 52 minutes
- 2025-08-17

### Error 2025-08-17T00:31:43+00:00
```
2025-08-17T00:31:43.1726097Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-08-17T00:32:50.9176128Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-08-17T00:58:28.4946877Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-08-17T00:58:28.4947534Z     resource_advanced_cluster_test.go:694: Step 2/4 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:58:28.4948018Z         
2025-08-17T00:58:28.4948396Z         Error: error when getting project properties after create
2025-08-17T00:58:28.4948723Z         
2025-08-17T00:58:28.4949049Z           with mongodbatlas_project.cluster_project,
2025-08-17T00:58:28.4949693Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-17T00:58:28.4950287Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-17T00:58:28.4950772Z         
2025-08-17T00:58:28.4951254Z         error getting project (68a12337aafa9a76ca8bf150): error getting project's
2025-08-17T00:58:28.4951759Z         limits (68a12337aafa9a76ca8bf150):
2025-08-17T00:58:28.4952318Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a12337aafa9a76ca8bf150/limits
2025-08-17T00:58:28.4952964Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:58:28.4953517Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:58:28.4953894Z         BadRequestDetail: 
2025-08-17T00:59:47.1384585Z 2025/08/17 00:59:47 error setting `oplog_size_mb` for MongoDB Cluster (): 0
2025-08-17T01:08:51.8908223Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (2160.98s)
```

- 2025-08-18 PASS 26 minutes
- 2025-08-19 PASS 20 minutes
- 2025-08-20
  - PASS 20 minutes
  - PASS 22 minutes
- 2025-08-21 PASS 29 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 31 minutes
- 2025-08-24 PASS 22 minutes
- 2025-08-25 PASS 17 minutes
- 2025-08-26 PASS 30 minutes
- 2025-08-27 PASS 29 minutes
- 2025-08-28 PASS 24 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 18 minutes
- 2025-08-31 PASS 27 minutes
- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:30:42+00:00
```
2025-09-01T00:30:42.5263577Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-09-01T00:30:44.5116066Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-09-01T00:30:46.4382424Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-09-01T00:30:46.4383482Z     resource_advanced_cluster_test.go:695: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:30:46.4384251Z         
2025-09-01T00:30:46.4385042Z         Error: error creating project: test-acc-tf-p-2421250339271865338
2025-09-01T00:30:46.4385825Z         
2025-09-01T00:30:46.4386477Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:46.4387773Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:46.4388940Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:46.4389538Z         
2025-09-01T00:30:46.4390442Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:46.4391670Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:46.4392887Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:46.4394080Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:46.4394786Z         BadRequestDetail: 
2025-09-01T00:30:46.4409404Z   
2025-09-01T00:30:46.5326708Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (2.04s)
```

  - PASS 34 minutes
  - PASS an hour
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-09-02 PASS 22 minutes
- 2025-09-03 PASS 39 minutes
- 2025-09-04 PASS 28 minutes