# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 1.09s
2025-06-05 00:35 | dev | 6.06s
2025-06-22 01:03 | qa | 36.09s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
### 2025-04-10
#### PASS 7 seconds
### 2025-04-11
#### PASS 7 seconds
### 2025-04-12
#### PASS 8 seconds
### 2025-04-13
#### PASS 8 seconds
### 2025-04-14
#### PASS 7 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-04-17
#### PASS 8 seconds
### 2025-04-18
#### PASS 10 seconds
### 2025-04-19
#### PASS 7 seconds
### 2025-04-20
#### PASS 7 seconds
### 2025-04-21
#### PASS 7 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 8 seconds
### 2025-04-24
#### PASS 7 seconds
### 2025-04-25
#### PASS 7 seconds
### 2025-04-26
#### PASS 8 seconds
### 2025-04-27
#### PASS 7 seconds
### 2025-04-28
#### PASS 8 seconds
### 2025-04-29
#### PASS 6 seconds
### 2025-04-30
#### PASS 7 seconds
### 2025-05-01
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-05-02
#### PASS 7 seconds
### 2025-05-03
#### PASS 7 seconds
### 2025-05-04
#### PASS 8 seconds
### 2025-05-05
#### PASS 6 seconds
### 2025-05-06
#### PASS 8 seconds
### 2025-05-07
#### PASS 8 seconds
### 2025-05-08
#### PASS 8 seconds
### 2025-05-09
#### PASS 7 seconds
### 2025-05-10
#### PASS 8 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:30:10.3039719Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-05-11T00:30:11.3745733Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-05-11T00:30:12.9119238Z    test_step_number=1 test_name=TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-11T00:30:13.1917645Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-05-11T00:30:13.1918977Z     resource_advanced_cluster_test.go:718: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-05-11T00:30:13.1919781Z         
2025-05-11T00:30:13.1920294Z         Error: error creating project: test-acc-tf-p-7237286128102533166
2025-05-11T00:30:13.1920658Z         
2025-05-11T00:30:13.1921301Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:13.1922249Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:13.1922999Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:13.1923313Z         
2025-05-11T00:30:13.1923770Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:13.1924157Z         type
2025-05-11T00:30:13.2416128Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (1.87s)
```
### 2025-05-12
#### PASS 8 seconds
### 2025-05-13
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-05-14
#### PASS 8 seconds
### 2025-05-15
#### PASS 9 seconds
### 2025-05-16
#### PASS 7 seconds
### 2025-05-17
#### PASS 8 seconds
### 2025-05-18
#### PASS 9 seconds
### 2025-05-19
#### PASS 7 seconds
### 2025-05-20
#### PASS 10 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 9 seconds
### 2025-05-23
#### PASS 7 seconds
### 2025-05-24
#### PASS 8 seconds
### 2025-05-25
#### PASS 10 seconds
### 2025-05-26
#### PASS 7 seconds
### 2025-05-27
#### PASS 8 seconds
### 2025-05-28
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-05-29
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-05-30
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-05-31
#### PASS 8 seconds
### 2025-06-01
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-06-02
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-06-03
#### PASS 7 seconds
### 2025-06-04
#### PASS 8 seconds
### 2025-06-05
#### FAIL 6 seconds
```
2025-06-05T00:35:30.3573125Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-05T00:35:42.8660653Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-05T00:35:49.3683532Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-05T00:35:49.3684896Z     resource_advanced_cluster_test.go:721: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:35:49.3686024Z         
2025-06-05T00:35:49.3686849Z         Error: error creating project: test-acc-tf-p-7548643818245155289
2025-06-05T00:35:49.3687580Z         
2025-06-05T00:35:49.3688227Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:49.3689449Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:49.3690653Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:49.3691244Z         
2025-06-05T00:35:49.3692142Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:49.3693330Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:49.3694426Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:49.4291375Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (6.57s)
```
### 2025-06-06
#### PASS 10 seconds
### 2025-06-07
#### PASS 7 seconds
### 2025-06-08
#### PASS 7 seconds
### 2025-06-09
#### PASS 8 seconds
### 2025-06-10
#### PASS 8 seconds
### 2025-06-11
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-06-12
#### PASS 10 seconds
### 2025-06-13
#### PASS 7 seconds
### 2025-06-14
#### PASS 9 seconds
### 2025-06-15
#### PASS 8 seconds
### 2025-06-16
#### PASS 9 seconds
### 2025-06-17
#### PASS 8 seconds
### 2025-06-18
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-06-19
#### PASS 8 seconds
### 2025-06-20
#### PASS 8 seconds
### 2025-06-21
#### PASS 7 seconds
### 2025-06-22
#### FAIL 36 seconds
```
2025-06-22T01:03:31.8038818Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-22T01:05:07.8951308Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-22T01:05:44.6981364Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-06-22T01:05:44.6982481Z     resource_advanced_cluster_test.go:721: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-22T01:05:44.6983117Z         
2025-06-22T01:05:44.6983557Z         Error: error when getting project properties after create
2025-06-22T01:05:44.6983910Z         
2025-06-22T01:05:44.6984243Z           with mongodbatlas_project.cluster_project,
2025-06-22T01:05:44.6984974Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T01:05:44.6985759Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-22T01:05:44.6986186Z         
2025-06-22T01:05:44.6986620Z         error getting project (685756c8ab82446d9bfb3789): error getting project's
2025-06-22T01:05:44.6987157Z         limits (685756c8ab82446d9bfb3789):
2025-06-22T01:05:44.6987709Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/685756c8ab82446d9bfb3789/limits
2025-06-22T01:05:44.6988344Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T01:05:44.6988891Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T01:05:44.6989266Z         BadRequestDetail: 
2025-06-22T01:05:44.7430495Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (36.85s)
```
### 2025-06-23
#### PASS 8 seconds
### 2025-06-24
#### PASS 8 seconds
### 2025-06-25
#### PASS 8 seconds
### 2025-06-26
#### PASS 10 seconds
### 2025-06-27
#### PASS 9 seconds
### 2025-06-28
#### PASS 7 seconds
### 2025-06-29
#### PASS 7 seconds
### 2025-06-30
#### PASS 8 seconds
### 2025-07-01
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 9 seconds
#### PASS 7 seconds
### 2025-07-02
#### PASS 9 seconds
### 2025-07-03
#### PASS 8 seconds
### 2025-07-04
#### PASS 9 seconds
### 2025-07-05
#### PASS 7 seconds
### 2025-07-06
#### PASS 36 seconds
### 2025-07-07
#### PASS 7 seconds
### 2025-07-08
#### PASS 9 seconds
### 2025-07-09
#### PASS 7 seconds