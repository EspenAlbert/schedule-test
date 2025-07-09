# network/networkcontainer/TestAccNetworkContainer_basicGCP Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-01 05:02 | dev | 0.04s
2025-05-11 00:29 | qa | 0.01s

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
#### PASS 2 minutes
### 2025-04-12
#### PASS 2 minutes
### 2025-04-13
#### PASS 2 minutes
### 2025-04-14
#### PASS 2 minutes
### 2025-04-15
#### PASS 2 minutes
### 2025-04-16
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-04-17
#### PASS 2 minutes
### 2025-04-18
#### PASS 2 minutes
### 2025-04-19
#### PASS 2 minutes
### 2025-04-20
#### PASS 2 minutes
### 2025-04-21
#### PASS 2 minutes
### 2025-04-22
#### PASS 2 minutes
### 2025-04-23
#### PASS 2 minutes
### 2025-04-24
#### PASS 2 minutes
### 2025-04-25
#### PASS 2 minutes
### 2025-04-26
#### PASS 2 minutes
### 2025-04-27
#### PASS 2 minutes
### 2025-04-28
#### PASS 2 minutes
### 2025-04-29
#### PASS 2 minutes
### 2025-04-30
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-05-01
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### FAIL a moment
```
2025-05-01T05:02:18.0301708Z === RUN   TestAccNetworkContainer_basicGCP
2025-05-01T05:02:18.0305123Z === CONT  TestAccNetworkContainer_basicGCP
2025-05-01T05:02:18.0315353Z === NAME  TestAccNetworkContainer_basicGCP
2025-05-01T05:02:18.0316129Z     resource_network_container_test.go:90: Step 1/2 error: Error running apply: exit status 1
2025-05-01T05:02:18.0316587Z         
2025-05-01T05:02:18.0317397Z         Error: error creating MongoDB Network Peering Container: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-01T05:02:18.0317995Z         
2025-05-01T05:02:18.0318360Z           with mongodbatlas_network_container.test,
2025-05-01T05:02:18.0319051Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2025-05-01T05:02:18.0319694Z           12: 		resource "mongodbatlas_network_container" "test" {
2025-05-01T05:02:18.0331404Z         
2025-05-01T05:02:18.0340292Z    test_terraform_path=/home/runner/work/_temp/081a6ba8-6826-4ad7-919c-6fa85ba9f8c7/terraform test_step_number=1 test_working_directory=/tmp/plugintest133376709
2025-05-01T05:02:18.0359987Z --- FAIL: TestAccNetworkContainer_basicGCP (0.43s)
```
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-05-02
#### PASS 2 minutes
### 2025-05-03
#### PASS 2 minutes
### 2025-05-04
#### PASS 2 minutes
### 2025-05-05
#### PASS 2 minutes
### 2025-05-06
#### PASS 2 minutes
### 2025-05-07
#### PASS 2 minutes
### 2025-05-08
#### PASS 2 minutes
### 2025-05-09
#### PASS 2 minutes
### 2025-05-10
#### PASS 2 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:52.7912978Z === RUN   TestAccNetworkContainer_basicGCP
2025-05-11T00:29:52.7913937Z     resource_network_container_test.go:87: Creating execution project: test-acc-tf-p-1438416236406693371
2025-05-11T00:29:52.7914785Z     resource_network_container_test.go:87: 
2025-05-11T00:29:52.7916296Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:52.7919180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:52.7922370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:87
2025-05-11T00:29:52.7924037Z         	Error:      	Received unexpected error:
2025-05-11T00:29:52.7925422Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:52.7926288Z         	Test:       	TestAccNetworkContainer_basicGCP
2025-05-11T00:29:52.7927862Z         	Messages:   	Project creation failed: test-acc-tf-p-1438416236406693371, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:52.8039595Z --- FAIL: TestAccNetworkContainer_basicGCP (0.08s)
```
### 2025-05-12
#### PASS 2 minutes
### 2025-05-13
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-05-14
#### PASS 2 minutes
### 2025-05-15
#### PASS 2 minutes
### 2025-05-16
#### PASS 2 minutes
### 2025-05-17
#### PASS 2 minutes
### 2025-05-18
#### PASS 2 minutes
### 2025-05-19
#### PASS 2 minutes
### 2025-05-20
#### PASS 2 minutes
### 2025-05-21
#### PASS 2 minutes
### 2025-05-22
#### PASS 2 minutes
### 2025-05-23
#### PASS 2 minutes
### 2025-05-24
#### PASS 2 minutes
### 2025-05-25
#### PASS 2 minutes
### 2025-05-26
#### PASS 2 minutes
### 2025-05-27
#### PASS 2 minutes
### 2025-05-28
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-05-29
#### PASS 2 minutes
### 2025-05-30
#### PASS 2 minutes
### 2025-05-31
#### PASS 2 minutes
### 2025-06-01
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-06-02
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-06-03
#### PASS 2 minutes
### 2025-06-04
#### PASS 2 minutes
### 2025-06-05
#### PASS 2 minutes
### 2025-06-06
#### PASS 2 minutes
### 2025-06-07
#### PASS 2 minutes
### 2025-06-08
#### PASS 2 minutes
### 2025-06-09
#### PASS 2 minutes
### 2025-06-10
#### PASS 2 minutes
### 2025-06-11
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-06-12
#### PASS 2 minutes
### 2025-06-13
#### PASS 2 minutes
### 2025-06-14
#### PASS 2 minutes
### 2025-06-15
#### PASS 2 minutes
### 2025-06-16
#### PASS 2 minutes
### 2025-06-17
#### PASS 2 minutes
### 2025-06-18
#### PASS 2 minutes
### 2025-06-19
#### PASS 2 minutes
### 2025-06-20
#### PASS 2 minutes
### 2025-06-21
#### PASS 2 minutes
### 2025-06-22
#### PASS 2 minutes
### 2025-06-23
#### PASS 2 minutes
### 2025-06-24
#### PASS 2 minutes
### 2025-06-25
#### PASS 2 minutes
### 2025-06-26
#### PASS 2 minutes
### 2025-06-27
#### PASS 2 minutes
### 2025-06-28
#### PASS 2 minutes
### 2025-06-29
#### PASS 2 minutes
### 2025-06-30
#### PASS 2 minutes
### 2025-07-01
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
#### PASS 2 minutes
### 2025-07-02
#### PASS 2 minutes
### 2025-07-03
#### PASS 2 minutes
### 2025-07-04
#### PASS 2 minutes
### 2025-07-05
#### PASS 2 minutes
### 2025-07-06
#### PASS 2 minutes
### 2025-07-07
#### PASS 2 minutes
### 2025-07-08
#### PASS 2 minutes
### 2025-07-09
#### PASS 2 minutes