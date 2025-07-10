# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 2.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 6.06s
[2025-06-29 02:02](#error-2025-06-29t0202460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860911949709c3a5a3cb8cb/limits | qa | flaky_500 | 37.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 8 seconds
- 2025-04-13 PASS 7 seconds
- 2025-04-14 PASS 8 seconds
- 2025-04-15 PASS 8 seconds
- 2025-04-16
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-04-17 PASS 7 seconds
- 2025-04-18 PASS 7 seconds
- 2025-04-19 PASS 8 seconds
- 2025-04-20 PASS 7 seconds
- 2025-04-21 PASS 8 seconds
- 2025-04-22 PASS 7 seconds
- 2025-04-23 PASS 8 seconds
- 2025-04-24 PASS 8 seconds
- 2025-04-25 PASS 9 seconds
- 2025-04-26 PASS 7 seconds
- 2025-04-27 PASS 8 seconds
- 2025-04-28 PASS 7 seconds
- 2025-04-29 PASS 8 seconds
- 2025-04-30 PASS 7 seconds
- 2025-05-01
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-05-02 PASS 8 seconds
- 2025-05-03 PASS 8 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05 PASS 7 seconds
- 2025-05-06 PASS 7 seconds
- 2025-05-07 PASS 9 seconds
- 2025-05-08 PASS 8 seconds
- 2025-05-09 PASS 9 seconds
- 2025-05-10 PASS 7 seconds
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7932084Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-05-11T00:30:01.8182560Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-05-11T00:30:01.8266757Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-05-11T00:30:01.8267499Z     resource_advanced_cluster_test.go:718: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-05-11T00:30:01.8268027Z         
2025-05-11T00:30:01.8268434Z         Error: error creating project: test-acc-tf-p-357254173478120598
2025-05-11T00:30:01.8268889Z         
2025-05-11T00:30:01.8269226Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:01.8269890Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:01.8270503Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:01.8270809Z         
2025-05-11T00:30:01.8271482Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8271961Z         type
2025-05-11T00:30:01.8281220Z   
2025-05-11T00:30:01.8339992Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (2.04s)
```

- 2025-05-12 PASS 8 seconds
- 2025-05-13
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-05-14 PASS 7 seconds
- 2025-05-15 PASS 7 seconds
- 2025-05-16 PASS 7 seconds
- 2025-05-17 PASS 8 seconds
- 2025-05-18 PASS 7 seconds
- 2025-05-19 PASS 7 seconds
- 2025-05-20 PASS 6 seconds
- 2025-05-21
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-05-22 PASS 8 seconds
- 2025-05-23 PASS 10 seconds
- 2025-05-24 PASS 7 seconds
- 2025-05-25 PASS 8 seconds
- 2025-05-26 PASS 9 seconds
- 2025-05-27 PASS 8 seconds
- 2025-05-28
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-05-29 PASS 8 seconds
- 2025-05-30
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-05-31 PASS 8 seconds
- 2025-06-01
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-06-02
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-06-03 PASS 8 seconds
- 2025-06-04 PASS 9 seconds
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5885005Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-05T00:35:38.5943870Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-05T00:35:38.6530394Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-05T00:35:38.6531412Z     resource_advanced_cluster_test.go:721: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:35:38.6532197Z         
2025-06-05T00:35:38.6532811Z         Error: error creating project: test-acc-tf-p-5375594582339919031
2025-06-05T00:35:38.6533360Z         
2025-06-05T00:35:38.6533994Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:38.6534874Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:38.6535740Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:38.6536359Z         
2025-06-05T00:35:38.6536914Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6537855Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6538843Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6540217Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (6.64s)
```

- 2025-06-06 PASS 8 seconds
- 2025-06-07 PASS 10 seconds
- 2025-06-08 PASS 7 seconds
- 2025-06-09 PASS 9 seconds
- 2025-06-10 PASS 9 seconds
- 2025-06-11
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-06-12 PASS 9 seconds
- 2025-06-13 PASS 9 seconds
- 2025-06-14 PASS 10 seconds
- 2025-06-15 PASS 8 seconds
- 2025-06-16 PASS 8 seconds
- 2025-06-17 PASS 8 seconds
- 2025-06-18
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-06-19 PASS 7 seconds
- 2025-06-20 PASS 8 seconds
- 2025-06-21 PASS 8 seconds
- 2025-06-22 PASS 7 seconds
- 2025-06-23 PASS 7 seconds
- 2025-06-24 PASS 9 seconds
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
- 2025-07-10 PASS 10 seconds