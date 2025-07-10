# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 5)
Success rate: 95.69%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-01 04:51](#error-2025-05-01t0451590000) |  | dev |  | 883.03s
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.08s
[2025-06-05 00:28](#error-2025-06-05t0028480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.03s
[2025-06-29 00:32](#error-2025-06-29t0032170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860899349709c3a5a3c9168/limits | qa | flaky_500 | 1445.07s
[2025-07-06 00:32](#error-2025-07-06t0032040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c406690ae45e168bd08d/limits | qa | flaky_500 | 35.05s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 21 minutes
- 2025-04-13 PASS 25 minutes
- 2025-04-14 PASS 21 minutes
- 2025-04-15 PASS 22 minutes
- 2025-04-16
  - PASS 22 minutes
  - PASS 28 minutes
- 2025-04-17 PASS 22 minutes
- 2025-04-18 PASS 22 minutes
- 2025-04-19 PASS 23 minutes
- 2025-04-20 PASS 24 minutes
- 2025-04-21 PASS 21 minutes
- 2025-04-22 PASS 22 minutes
- 2025-04-23 PASS 24 minutes
- 2025-04-24 PASS 22 minutes
- 2025-04-25 PASS 22 minutes
- 2025-04-26 PASS 23 minutes
- 2025-04-27 PASS 22 minutes
- 2025-04-28 PASS 22 minutes
- 2025-04-29 PASS 21 minutes
- 2025-04-30 PASS 22 minutes
- 2025-05-01
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 22 minutes
  - FAIL 14 minutes

### Error 2025-05-01T04:51:59+00:00
```
2025-05-01T04:51:59.7328914Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-01T04:51:59.7337109Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-01T05:01:51.1066164Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-01T05:01:51.1066940Z     resource_cluster_test.go:1398: Step 2/7 error: Error running post-apply refresh plan: exit status 1
2025-05-01T05:01:51.1067543Z         
2025-05-01T05:01:51.1067984Z         Error: error when getting project properties after create
2025-05-01T05:01:51.1068355Z         
2025-05-01T05:01:51.1068698Z           with mongodbatlas_project.test,
2025-05-01T05:01:51.1069379Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-01T05:01:51.1069969Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-01T05:01:51.1070363Z         
2025-05-01T05:01:51.1070801Z         error getting project (6812fdf1ed10397068f85040): error getting project's
2025-05-01T05:01:51.1071241Z         limits (6812fdf1ed10397068f85040):
2025-05-01T05:01:51.1072029Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812fdf1ed10397068f85040/limits
2025-05-01T05:01:51.1072696Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2025-05-01T05:01:51.1073319Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2025-05-01T05:01:55.9935887Z   
2025-05-01T05:06:43.0780832Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (883.35s)
```

  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-05-02 PASS 22 minutes
- 2025-05-03 PASS 24 minutes
- 2025-05-04 PASS 23 minutes
- 2025-05-05 PASS 20 minutes
- 2025-05-06 PASS 21 minutes
- 2025-05-07 PASS 21 minutes
- 2025-05-08 PASS 23 minutes
- 2025-05-09 PASS 24 minutes
- 2025-05-10 PASS 23 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.4133210Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-11T00:29:40.4136019Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-11T00:29:41.1211837Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-11T00:29:41.1212877Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-05-11T00:29:41.1213571Z         
2025-05-11T00:29:41.1214283Z         Error: error creating project: test-acc-tf-p-1292021562463544624
2025-05-11T00:29:41.1214912Z         
2025-05-11T00:29:41.1215469Z           with mongodbatlas_project.test,
2025-05-11T00:29:41.1216738Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:41.1217742Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:41.1218273Z         
2025-05-11T00:29:41.1219125Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:41.1219844Z         type
2025-05-11T00:29:41.1273064Z   
2025-05-11T00:29:41.1963462Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (0.79s)
```

- 2025-05-12 PASS 23 minutes
- 2025-05-13
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-05-14 PASS 21 minutes
- 2025-05-15 PASS 22 minutes
- 2025-05-16 PASS 23 minutes
- 2025-05-17 PASS 22 minutes
- 2025-05-18 PASS 22 minutes
- 2025-05-19 PASS 22 minutes
- 2025-05-20 PASS 22 minutes
- 2025-05-21 PASS 21 minutes
- 2025-05-22 PASS 23 minutes
- 2025-05-23 PASS 21 minutes
- 2025-05-24 PASS 22 minutes
- 2025-05-25 PASS 23 minutes
- 2025-05-26 PASS 20 minutes
- 2025-05-27 PASS 23 minutes
- 2025-05-28
  - PASS 30 minutes
  - PASS 22 minutes
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-05-29
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-05-30
  - PASS 20 minutes
  - PASS 21 minutes
- 2025-05-31 PASS 23 minutes
- 2025-06-01
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 21 minutes
- 2025-06-02
  - PASS 20 minutes
  - PASS 21 minutes
  - PASS 20 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 23 minutes
- 2025-06-05

### Error 2025-06-05T00:28:48+00:00
```
2025-06-05T00:28:48.8420345Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-05T00:28:48.8427855Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-05T00:28:53.0612047Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-05T00:28:53.0613091Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-06-05T00:28:53.0613816Z         
2025-06-05T00:28:53.0614766Z         Error: error creating project: test-acc-tf-p-4436541576653164925
2025-06-05T00:28:53.0615206Z         
2025-06-05T00:28:53.0615778Z           with mongodbatlas_project.test,
2025-06-05T00:28:53.0616588Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:53.0617332Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:53.0617796Z         
2025-06-05T00:28:53.0618272Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:53.0618897Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:53.0619471Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:53.1079905Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4.27s)
```

- 2025-06-06 PASS 20 minutes
- 2025-06-07 PASS 22 minutes
- 2025-06-08 PASS 22 minutes
- 2025-06-09 PASS 22 minutes
- 2025-06-10 PASS 29 minutes
- 2025-06-11
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-06-12 PASS 22 minutes
- 2025-06-13 PASS 23 minutes
- 2025-06-14 PASS 21 minutes
- 2025-06-15 PASS 22 minutes
- 2025-06-16 PASS 26 minutes
- 2025-06-17 PASS 21 minutes
- 2025-06-18 PASS 23 minutes
- 2025-06-19 PASS 28 minutes
- 2025-06-20 PASS 23 minutes
- 2025-06-21 PASS 23 minutes
- 2025-06-22 PASS 24 minutes
- 2025-06-23 PASS 20 minutes
- 2025-06-24 PASS 22 minutes
- 2025-06-25 PASS 21 minutes
- 2025-06-26 PASS 22 minutes
- 2025-06-27 PASS 21 minutes
- 2025-06-28 PASS 21 minutes
- 2025-06-29

### Error 2025-06-29T00:32:17+00:00
```
2025-06-29T00:32:17.2279499Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-29T00:32:17.2282731Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-29T00:52:49.3254440Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-29T00:52:49.3255229Z     resource_cluster_test.go:1398: Step 7/7 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:52:49.3255843Z         
2025-06-29T00:52:49.3256372Z         Error: error when getting project properties after create
2025-06-29T00:52:49.3256691Z         
2025-06-29T00:52:49.3256971Z           with mongodbatlas_project.test,
2025-06-29T00:52:49.3257541Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:52:49.3258069Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:52:49.3258339Z         
2025-06-29T00:52:49.3258766Z         error getting project (6860899349709c3a5a3c9168): error getting project's
2025-06-29T00:52:49.3259201Z         limits (6860899349709c3a5a3c9168):
2025-06-29T00:52:49.3259757Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860899349709c3a5a3c9168/limits
2025-06-29T00:52:49.3260401Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:52:49.3260954Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:52:49.3261321Z         BadRequestDetail: 
2025-06-29T00:56:22.9329198Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1445.71s)
```

- 2025-06-30 PASS 22 minutes
- 2025-07-01
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-07-02 PASS 21 minutes
- 2025-07-03 PASS 22 minutes
- 2025-07-04 PASS 22 minutes
- 2025-07-05 PASS 20 minutes
- 2025-07-06

### Error 2025-07-06T00:32:04+00:00
```
2025-07-06T00:32:04.2082516Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T00:32:04.2112679Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T00:32:39.6167877Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T00:32:39.6168762Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-07-06T00:32:39.6169360Z         
2025-07-06T00:32:39.6169908Z         Error: error when getting project properties after create
2025-07-06T00:32:39.6170238Z         
2025-07-06T00:32:39.6170693Z           with mongodbatlas_project.test,
2025-07-06T00:32:39.6171514Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:32:39.6172087Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:32:39.6172576Z         
2025-07-06T00:32:39.6173497Z         error getting project (6869c406690ae45e168bd08d): error getting project's
2025-07-06T00:32:39.6174140Z         limits (6869c406690ae45e168bd08d):
2025-07-06T00:32:39.6175013Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c406690ae45e168bd08d/limits
2025-07-06T00:32:39.6176204Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:39.6177192Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:39.6177852Z         BadRequestDetail: 
2025-07-06T00:32:39.6781016Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (35.47s)
```

- 2025-07-07 PASS 22 minutes
- 2025-07-08 PASS 22 minutes
- 2025-07-09 PASS 23 minutes
- 2025-07-10 PASS 21 minutes