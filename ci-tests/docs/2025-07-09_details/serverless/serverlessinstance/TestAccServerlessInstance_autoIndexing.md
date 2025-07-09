# serverless/serverlessinstance/TestAccServerlessInstance_autoIndexing Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 00:32 | dev | 181.02s

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
### 2025-04-11
#### PASS 4 minutes
### 2025-04-12
#### PASS 4 minutes
### 2025-04-13
#### PASS 4 minutes
### 2025-04-14
#### PASS 4 minutes
### 2025-04-15
#### PASS 4 minutes
### 2025-04-16
#### PASS 4 minutes
#### PASS 4 minutes
### 2025-04-17
#### PASS 4 minutes
### 2025-04-18
#### PASS 4 minutes
### 2025-04-19
#### PASS 4 minutes
### 2025-04-20
#### PASS 4 minutes
### 2025-04-21
#### PASS 4 minutes
### 2025-04-22
#### PASS 4 minutes
### 2025-04-23
#### PASS 4 minutes
### 2025-04-24
#### PASS 4 minutes
### 2025-04-25
#### PASS 4 minutes
### 2025-04-26
#### PASS 4 minutes
### 2025-04-27
#### PASS 4 minutes
### 2025-04-28
#### PASS 4 minutes
### 2025-04-29
#### PASS 4 minutes
### 2025-04-30
#### PASS 4 minutes
#### PASS 4 minutes
### 2025-05-01
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
### 2025-05-02
#### PASS 4 minutes
### 2025-05-03
#### PASS 4 minutes
### 2025-05-04
#### PASS 4 minutes
### 2025-05-05
#### PASS 4 minutes
### 2025-05-06
#### PASS 4 minutes
### 2025-05-07
#### PASS 4 minutes
### 2025-05-08
#### PASS 4 minutes
### 2025-05-09
#### PASS 4 minutes
### 2025-05-10
#### PASS 4 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:45.1684861Z === RUN   TestAccServerlessInstance_autoIndexing
2025-05-11T00:29:45.1685473Z     resource_serverless_instance_test.go:96: Creating execution project: test-acc-tf-p-624398223646850180
2025-05-11T00:29:45.1686016Z     resource_serverless_instance_test.go:96: 
2025-05-11T00:29:45.1687052Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:45.1688764Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:45.1690852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/serverlessinstance/resource_serverless_instance_test.go:96
2025-05-11T00:29:45.1691866Z         	Error:      	Received unexpected error:
2025-05-11T00:29:45.1692716Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:45.1693280Z         	Test:       	TestAccServerlessInstance_autoIndexing
2025-05-11T00:29:45.1694275Z         	Messages:   	Project creation failed: test-acc-tf-p-624398223646850180, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:45.1694981Z --- FAIL: TestAccServerlessInstance_autoIndexing (0.01s)
```
### 2025-05-12
#### PASS 4 minutes
### 2025-05-13
#### PASS 4 minutes
#### PASS 4 minutes
### 2025-05-14
#### PASS 4 minutes
### 2025-05-15
#### PASS 4 minutes
### 2025-05-16
#### PASS 4 minutes
### 2025-05-17
#### PASS 4 minutes
### 2025-05-18
#### PASS 4 minutes
### 2025-05-19
#### PASS 4 minutes
### 2025-05-20
#### PASS 4 minutes
### 2025-05-21
#### PASS 4 minutes
### 2025-05-22
#### PASS 4 minutes
### 2025-05-23
#### PASS 4 minutes
### 2025-05-24
#### PASS 4 minutes
### 2025-05-25
#### PASS 4 minutes
### 2025-05-26
#### PASS 4 minutes
### 2025-05-27
#### PASS 4 minutes
### 2025-05-28
#### PASS 4 minutes
#### PASS 4 minutes
### 2025-05-29
#### PASS 4 minutes
### 2025-05-30
#### PASS 4 minutes
### 2025-05-31
#### PASS 4 minutes
### 2025-06-01
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
### 2025-06-02
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
### 2025-06-03
#### PASS 4 minutes
### 2025-06-04
#### PASS 4 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:32:20.7675853Z === RUN   TestAccServerlessInstance_autoIndexing
2025-06-05T00:32:20.7678420Z === CONT  TestAccServerlessInstance_autoIndexing
2025-06-05T00:32:20.7711326Z === NAME  TestAccServerlessInstance_autoIndexing
2025-06-05T00:32:20.7711911Z     resource_serverless_instance_test.go:99: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:20.7712343Z         
2025-06-05T00:32:20.7714125Z         Error: error creating MongoDB Serverless Instance: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4be161ca93c1f0520d0/serverless/test-acc-tf-c-869673316687438701 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:20.7715425Z         
2025-06-05T00:32:20.7715763Z           with mongodbatlas_serverless_instance.test,
2025-06-05T00:32:20.7716429Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2025-06-05T00:32:20.7717233Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2025-06-05T00:32:20.7717562Z         
2025-06-05T00:32:20.7729027Z    test_name=TestAccServerlessInstance_basic test_terraform_path=/home/runner/work/_temp/733a50cb-be6f-43cd-96c9-7ce3f081ce33/terraform
2025-06-05T00:32:20.7736261Z --- FAIL: TestAccServerlessInstance_autoIndexing (181.16s)
```
### 2025-06-06
#### PASS 4 minutes
### 2025-06-07
#### PASS 4 minutes
### 2025-06-08
#### PASS 4 minutes
### 2025-06-09
#### PASS 4 minutes
### 2025-06-10
#### PASS 4 minutes
### 2025-06-11
#### PASS 4 minutes
#### PASS 4 minutes
### 2025-06-12
#### PASS 4 minutes
### 2025-06-13
#### PASS 4 minutes
### 2025-06-14
#### PASS 4 minutes
### 2025-06-15
#### PASS 4 minutes
### 2025-06-16
#### PASS 4 minutes
### 2025-06-17
#### PASS 4 minutes
### 2025-06-18
#### PASS 4 minutes
### 2025-06-19
#### PASS 4 minutes
### 2025-06-20
#### PASS 4 minutes
### 2025-06-21
#### PASS 4 minutes
### 2025-06-22
#### PASS 4 minutes
### 2025-06-23
#### PASS 4 minutes
### 2025-06-24
#### PASS 4 minutes
### 2025-06-25
#### PASS 4 minutes
### 2025-06-26
#### PASS 4 minutes
### 2025-06-27
#### PASS 4 minutes
### 2025-06-28
#### PASS 4 minutes
### 2025-06-29
#### PASS 4 minutes
### 2025-06-30
#### PASS 4 minutes
### 2025-07-01
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
#### PASS 4 minutes
### 2025-07-02
#### PASS 4 minutes
### 2025-07-03
#### PASS 4 minutes
### 2025-07-04
#### PASS 4 minutes
### 2025-07-05
#### PASS 4 minutes
### 2025-07-06
#### PASS 4 minutes
### 2025-07-07
#### PASS 4 minutes
### 2025-07-08
#### PASS 4 minutes
### 2025-07-09
#### PASS 4 minutes