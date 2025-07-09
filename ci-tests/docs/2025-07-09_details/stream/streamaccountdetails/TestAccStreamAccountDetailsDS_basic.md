# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 44 TestRuns in dev, qa from 2025-06-05 to 2025-07-09 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-06-05 00:32 | dev | 189.05s

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
2025-04-10: MISSING
2025-04-11: MISSING
2025-04-12: MISSING
2025-04-13: MISSING
2025-04-14: MISSING
2025-04-15: MISSING
2025-04-16: MISSING
2025-04-17: MISSING
2025-04-18: MISSING
2025-04-19: MISSING
2025-04-20: MISSING
2025-04-21: MISSING
2025-04-22: MISSING
2025-04-23: MISSING
2025-04-24: MISSING
2025-04-25: MISSING
2025-04-26: MISSING
2025-04-27: MISSING
2025-04-28: MISSING
2025-04-29: MISSING
2025-04-30: MISSING
2025-05-01: MISSING
2025-05-02: MISSING
2025-05-03: MISSING
2025-05-04: MISSING
2025-05-05: MISSING
2025-05-06: MISSING
2025-05-07: MISSING
2025-05-08: MISSING
2025-05-09: MISSING
2025-05-10: MISSING
2025-05-11: MISSING
2025-05-12: MISSING
2025-05-13: MISSING
2025-05-14: MISSING
2025-05-15: MISSING
2025-05-16: MISSING
2025-05-17: MISSING
2025-05-18: MISSING
2025-05-19: MISSING
2025-05-20: MISSING
2025-05-21: MISSING
2025-05-22: MISSING
2025-05-23: MISSING
2025-05-24: MISSING
2025-05-25: MISSING
2025-05-26: MISSING
2025-05-27: MISSING
2025-05-28: MISSING
2025-05-29: MISSING
2025-05-30: MISSING
2025-05-31: MISSING
2025-06-01: MISSING
2025-06-02: MISSING
2025-06-03: MISSING
2025-06-04: MISSING
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:32:19.8736614Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-05T00:32:19.8737937Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-1972557385402554396
2025-06-05T00:32:19.8739518Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-05T00:32:19.8740713Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:28:48.054397222Z, ProjectID: 6840e4b8161ca93c1f051c51, Cluster name: test-acc-tf-c-7332004579219249592
2025-06-05T00:32:19.8752664Z    test_terraform_path=/home/runner/work/_temp/cdf15d4c-605e-4ab6-8fa3-f3aec746a085/terraform test_working_directory=/tmp/plugintest2041682081 test_name=TestAccStreamAccountDetailsDS_basic test_step_number=1
2025-06-05T00:32:19.8754147Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:32:19.8754571Z         
2025-06-05T00:32:19.8756301Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c51/clusters/test-acc-tf-c-7332004579219249592 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:19.8757504Z         
2025-06-05T00:32:19.8757891Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:32:19.8758626Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:32:19.8759302Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:32:19.8759664Z         
2025-06-05T00:32:19.8759944Z --- FAIL: TestAccStreamAccountDetailsDS_basic (189.50s)
```
2025-06-06: MISSING
### 2025-06-07
#### PASS 13 minutes
### 2025-06-08
#### PASS 13 minutes
### 2025-06-09
#### PASS 11 minutes
### 2025-06-10
#### PASS 22 minutes
### 2025-06-11
#### PASS 12 minutes
#### PASS 13 minutes
### 2025-06-12
#### PASS 14 minutes
2025-06-13: MISSING
### 2025-06-14
#### PASS 13 minutes
### 2025-06-15
#### PASS 13 minutes
### 2025-06-16
#### PASS 13 minutes
### 2025-06-17
#### PASS 13 minutes
### 2025-06-18
#### PASS 13 minutes
#### PASS 12 minutes
### 2025-06-19
#### PASS 12 minutes
### 2025-06-20
#### PASS 12 minutes
### 2025-06-21
#### PASS 12 minutes
### 2025-06-22
#### PASS 12 minutes
### 2025-06-23
#### PASS 12 minutes
### 2025-06-24
#### PASS 13 minutes
### 2025-06-25
#### PASS 11 minutes
#### PASS 12 minutes
### 2025-06-26
#### PASS 14 minutes
#### PASS 10 minutes
### 2025-06-27
#### PASS 12 minutes
### 2025-06-28
#### PASS 12 minutes
### 2025-06-29
#### PASS 14 minutes
### 2025-06-30
#### PASS 11 minutes
### 2025-07-01
#### PASS 12 minutes
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 10 minutes
#### PASS 10 minutes
#### PASS 12 minutes
#### PASS 11 minutes
#### PASS 12 minutes
### 2025-07-02
#### PASS 10 minutes
### 2025-07-03
#### PASS 12 minutes
### 2025-07-04
#### PASS 17 minutes
### 2025-07-05
#### PASS 13 minutes
### 2025-07-06
#### PASS 12 minutes
### 2025-07-07
#### PASS 11 minutes
### 2025-07-08
#### PASS 11 minutes
### 2025-07-09
#### PASS 12 minutes