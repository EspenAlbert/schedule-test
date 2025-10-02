# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 46) FAIL
Success rate: 97.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-30 15:15](#error-2025-09-30t1515460000) |  | qa | flaky_client | 529.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 30 minutes
- 2025-09-04 PASS 19 minutes
- 2025-09-05 PASS 14 minutes
- 2025-09-06 PASS 16 minutes
- 2025-09-07 PASS 16 minutes
- 2025-09-08
  - PASS 24 minutes
  - PASS 17 minutes
  - PASS 22 minutes
- 2025-09-09 PASS 17 minutes
- 2025-09-10 PASS 20 minutes
- 2025-09-11 PASS 16 minutes
- 2025-09-12
  - PASS 15 minutes
  - PASS 11 minutes
- 2025-09-13 PASS 18 minutes
- 2025-09-14 PASS 10 minutes
- 2025-09-15
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 10 minutes
- 2025-09-16 PASS 17 minutes
- 2025-09-17 PASS 12 minutes
- 2025-09-18 PASS 18 minutes
- 2025-09-19 PASS 13 minutes
- 2025-09-20 PASS 14 minutes
- 2025-09-21 PASS 15 minutes
- 2025-09-22 PASS 15 minutes
- 2025-09-23 PASS 14 minutes
- 2025-09-24 PASS 15 minutes
- 2025-09-25 PASS 16 minutes
- 2025-09-26 PASS 16 minutes
- 2025-09-27 PASS 11 minutes
- 2025-09-28 PASS 13 minutes
- 2025-09-29
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-09-30
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 13 minutes
  - FAIL 8 minutes

### Error 2025-09-30T15:15:46+00:00
```
2025-09-30T15:15:46.4451344Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-09-30T15:15:46.4452131Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-6820842837117498397
2025-09-30T15:15:46.4453095Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-09-30T15:15:46.4454285Z     pre_check.go:32: Time before creating cluster: 2025-09-30T15:06:33.52704848Z, ProjectID: 68dbf1f2a072243c859d2933, Cluster name: test-acc-tf-c-237840351628640638
2025-09-30T15:15:46.4468282Z   
2025-09-30T15:15:46.4468719Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2025-09-30T15:15:46.4469132Z         
2025-09-30T15:15:46.4469407Z         Error: Error in create
2025-09-30T15:15:46.4469690Z         
2025-09-30T15:15:46.4470078Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-30T15:15:46.4470756Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-30T15:15:46.4471392Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-30T15:15:46.4471723Z         
2025-09-30T15:15:46.4472159Z         cluster=test-acc-tf-c-237840351628640638 didn't reach desired state: IDLE,
2025-09-30T15:15:46.4472549Z         error: Get
2025-09-30T15:15:46.4473255Z         "https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf1f2a072243c859d2933/clusters/test-acc-tf-c-237840351628640638":
2025-09-30T15:15:46.4473935Z         dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2025-09-30T15:15:46.4474411Z --- FAIL: TestAccStreamAccountDetailsDS_basic (529.52s)
```

- 2025-10-01
  - PASS 15 minutes
  - PASS 11 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 11 minutes
- 2025-10-02 PASS 31 minutes