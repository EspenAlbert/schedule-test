# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL(x 2)
Success rate: 95.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:59](#error-2025-10-05t0059370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68e1bbfdfec65822ddfca35c/dataFederation/test-acc-tf-3074257177237592816 | qa | flaky_500 | 96.07s
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b120e2dc7470847bc0cf | dev | flaky_500 | 53.04s

## Timeline
- 2025-09-30 PASS 59 seconds
- 2025-10-01
  - PASS 52 seconds
  - PASS 56 seconds
  - PASS 54 seconds
  - PASS 53 seconds
  - PASS 53 seconds
  - PASS 53 seconds
  - PASS 54 seconds
  - PASS 56 seconds
- 2025-10-02 PASS 58 seconds
- 2025-10-03 PASS 54 seconds
- 2025-10-04 PASS 52 seconds
- 2025-10-05

### Error 2025-10-05T00:59:37+00:00
```
2025-10-05T00:59:37.7032287Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-05T00:59:37.7045262Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-05T00:59:37.7084067Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-05T00:59:37.7085173Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-10-05T00:59:37.7086080Z         
2025-10-05T00:59:37.7088778Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-3074257177237592816): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfdfec65822ddfca35c/dataFederation/test-acc-tf-3074257177237592816 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-05T00:59:37.7090198Z         
2025-10-05T00:59:37.7090605Z           with mongodbatlas_federated_database_instance.test,
2025-10-05T00:59:37.7091356Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-10-05T00:59:37.7092056Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-10-05T00:59:37.7092412Z         
2025-10-05T00:59:37.7104573Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-05T00:59:37.7105030Z         
2025-10-05T00:59:37.7107067Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-3074257177237592816): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfdfec65822ddfca35c/dataFederation/test-acc-tf-3074257177237592816 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-05T00:59:37.7108455Z         
2025-10-05T00:59:37.7108761Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (96.69s)
```

- 2025-10-06 PASS 49 seconds
- 2025-10-07 PASS 51 seconds
- 2025-10-08 PASS 56 seconds
- 2025-10-09 PASS 58 seconds
- 2025-10-10 PASS 57 seconds
- 2025-10-11 PASS 54 seconds
- 2025-10-12 PASS 58 seconds
- 2025-10-13 PASS 53 seconds
- 2025-10-14 PASS 55 seconds
- 2025-10-15 PASS 56 seconds
- 2025-10-16 PASS 51 seconds
- 2025-10-17 PASS 56 seconds
- 2025-10-18 PASS 55 seconds
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS 55 seconds
  - PASS 54 seconds
- 2025-10-21 PASS 50 seconds
- 2025-10-22
  - PASS 52 seconds
  - PASS 56 seconds
- 2025-10-23 PASS 53 seconds
- 2025-10-24 PASS 54 seconds
- 2025-10-25 PASS 52 seconds
- 2025-10-26 PASS 54 seconds
- 2025-10-27 PASS 53 seconds
- 2025-10-28 PASS 54 seconds
- 2025-10-29 PASS 56 seconds
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.1610004Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-30T00:44:19.1617148Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-30T00:44:19.1674114Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-10-30T00:44:19.1674844Z     data_source_federated_database_instance_test.go:29: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.1675375Z         
2025-10-30T00:44:19.1675982Z         Error: error when destroying resource
2025-10-30T00:44:19.1676284Z         
2025-10-30T00:44:19.1676621Z         error deleting project (6902b120e2dc7470847bc0cf):
2025-10-30T00:44:19.1677188Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b120e2dc7470847bc0cf
2025-10-30T00:44:19.1677804Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.1678391Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.1678790Z         BadRequestDetail: 
2025-10-30T00:44:19.1679120Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (53.41s)
```
