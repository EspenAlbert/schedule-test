# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 02:02](#error-2025-06-29t0202460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860911949709c3a5a3cb8cb/limits | qa | flaky_500 | 37.00s
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0f0006d8d55bb9e95c3/limits | qa | flaky_500 | 37.03s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6873058a207f456171043787/limits | qa | flaky_500 | 37.05s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 8 seconds
- 2025-06-26
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-06-27 PASS 9 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29

### Error 2025-06-29T02:02:46+00:00
```
2025-06-29T02:02:46.2848792Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-29T02:02:46.2890148Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-29T02:02:46.2995123Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-29T02:02:46.2995847Z     resource_advanced_cluster_test.go:721: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-29T02:02:46.2996365Z         
2025-06-29T02:02:46.2996730Z         Error: error when getting project properties after create
2025-06-29T02:02:46.2997052Z         
2025-06-29T02:02:46.2997394Z           with mongodbatlas_project.cluster_project,
2025-06-29T02:02:46.2998036Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-29T02:02:46.2998621Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-29T02:02:46.2998921Z         
2025-06-29T02:02:46.2999349Z         error getting project (6860911949709c3a5a3cb8cb): error getting project's
2025-06-29T02:02:46.2999785Z         limits (6860911949709c3a5a3cb8cb):
2025-06-29T02:02:46.3000511Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860911949709c3a5a3cb8cb/limits
2025-06-29T02:02:46.3001159Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T02:02:46.3001715Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T02:02:46.3002090Z         BadRequestDetail: 
2025-06-29T02:02:46.3002422Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (37.00s)
```

- 2025-06-30 PASS 7 seconds
- 2025-07-01
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 8 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 9 seconds
- 2025-07-06 PASS 8 seconds
- 2025-07-07 PASS 9 seconds
- 2025-07-08 PASS 8 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10
  - PASS 10 seconds
  - FAIL 37 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7754531Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-07-10T14:35:50.7803689Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-07-10T14:35:50.7906610Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-07-10T14:35:50.7907312Z     resource_advanced_cluster_test.go:721: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-10T14:35:50.7907815Z         
2025-07-10T14:35:50.7908171Z         Error: error when getting project properties after create
2025-07-10T14:35:50.7908481Z         
2025-07-10T14:35:50.7908919Z           with mongodbatlas_project.cluster_project,
2025-07-10T14:35:50.7909554Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T14:35:50.7910131Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-10T14:35:50.7910429Z         
2025-07-10T14:35:50.7910856Z         error getting project (686fc0f0006d8d55bb9e95c3): error getting project's
2025-07-10T14:35:50.7911292Z         limits (686fc0f0006d8d55bb9e95c3):
2025-07-10T14:35:50.7911840Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0f0006d8d55bb9e95c3/limits
2025-07-10T14:35:50.7912481Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.7913031Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.7913395Z         BadRequestDetail: 
2025-07-10T14:35:50.7926328Z   
2025-07-10T14:35:50.7952676Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (37.35s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 9 seconds
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2193984Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-07-13T02:11:00.2234329Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-07-13T02:11:00.2480055Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-07-13T02:11:00.2480765Z     resource_advanced_cluster_test.go:721: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-13T02:11:00.2481274Z         
2025-07-13T02:11:00.2481632Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2481946Z         
2025-07-13T02:11:00.2482265Z           with mongodbatlas_project.cluster_project,
2025-07-13T02:11:00.2482895Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T02:11:00.2483478Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T02:11:00.2483772Z         
2025-07-13T02:11:00.2484188Z         error getting project (6873058a207f456171043787): error getting project's
2025-07-13T02:11:00.2484620Z         limits (6873058a207f456171043787):
2025-07-13T02:11:00.2485309Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873058a207f456171043787/limits
2025-07-13T02:11:00.2485948Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2486503Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2486869Z         BadRequestDetail: 
2025-07-13T02:11:00.2499960Z   
2025-07-13T02:11:00.2507441Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (37.50s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 10 seconds
- 2025-07-16 PASS 8 seconds
- 2025-07-17 PASS 10 seconds
- 2025-07-18 PASS 7 seconds
- 2025-07-19 PASS 9 seconds
- 2025-07-20 PASS 8 seconds
- 2025-07-21 PASS 8 seconds
- 2025-07-22 PASS 7 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 14 seconds
- 2025-07-24 PASS 7 seconds