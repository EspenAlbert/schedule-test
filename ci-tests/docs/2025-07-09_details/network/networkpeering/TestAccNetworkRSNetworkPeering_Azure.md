# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 107) FAIL(x 6)
Success rate: 94.69%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:40 | dev | 473.02s
2025-04-20 00:42 | qa | 482.02s
2025-05-01 02:12 | dev | 501.05s
2025-05-11 00:29 | qa | 0.03s
2025-05-13 00:40 | dev | 477.08s
2025-06-05 00:54 | dev | 1525.08s

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
#### PASS 5 minutes
### 2025-04-12
#### PASS 5 minutes
### 2025-04-13
#### PASS 5 minutes
### 2025-04-14
#### PASS 4 minutes
### 2025-04-15
#### PASS 4 minutes
### 2025-04-16
#### FAIL 7 minutes
```
2025-04-16T00:40:00.2831675Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-04-16T00:40:00.2832359Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-2560363306625047291
2025-04-16T00:40:00.2837041Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-04-16T00:40:00.2852054Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-04-16T00:40:00.2852637Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-04-16T00:40:00.2853072Z         
2025-04-16T00:40:00.2853459Z         Error: peer networking is in a failed state: RETRYABLE
2025-04-16T00:40:00.2853795Z         
2025-04-16T00:40:00.2854140Z           with mongodbatlas_network_peering.test,
2025-04-16T00:40:00.2854811Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-04-16T00:40:00.2855428Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-04-16T00:40:00.2855756Z         
2025-04-16T00:40:00.2856052Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (473.19s)
```
#### PASS 5 minutes
### 2025-04-17
#### PASS 5 minutes
### 2025-04-18
#### PASS 4 minutes
### 2025-04-19
#### PASS 5 minutes
### 2025-04-20
#### FAIL 8 minutes
```
2025-04-20T00:42:01.6945209Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-04-20T00:42:01.6946316Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-6010398761413658909
2025-04-20T00:42:01.6953988Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-04-20T00:42:01.6968103Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-04-20T00:42:01.6968873Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-04-20T00:42:01.6969312Z         
2025-04-20T00:42:01.6969705Z         Error: peer networking is in a failed state: RETRYABLE
2025-04-20T00:42:01.6970039Z         
2025-04-20T00:42:01.6970387Z           with mongodbatlas_network_peering.test,
2025-04-20T00:42:01.6971048Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-04-20T00:42:01.6971657Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-04-20T00:42:01.6971987Z         
2025-04-20T00:42:01.6972275Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (482.24s)
```
### 2025-04-21
#### PASS 5 minutes
### 2025-04-22
#### PASS 4 minutes
### 2025-04-23
#### PASS 5 minutes
### 2025-04-24
#### PASS 4 minutes
### 2025-04-25
#### PASS 5 minutes
### 2025-04-26
#### PASS 5 minutes
### 2025-04-27
#### PASS 4 minutes
### 2025-04-28
#### PASS 5 minutes
### 2025-04-29
#### PASS 4 minutes
### 2025-04-30
#### PASS 5 minutes
#### PASS 4 minutes
### 2025-05-01
#### PASS 4 minutes
#### FAIL 8 minutes
```
2025-05-01T02:12:38.6348467Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-05-01T02:12:38.6349106Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-312151799084776409
2025-05-01T02:12:38.6354031Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-05-01T02:12:38.6381683Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-05-01T02:12:38.6382280Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-05-01T02:12:38.6382710Z         
2025-05-01T02:12:38.6383108Z         Error: peer networking is in a failed state: RETRYABLE
2025-05-01T02:12:38.6383447Z         
2025-05-01T02:12:38.6383799Z           with mongodbatlas_network_peering.test,
2025-05-01T02:12:38.6384454Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-05-01T02:12:38.6385059Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-05-01T02:12:38.6385570Z         
2025-05-01T02:12:38.6385874Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (501.48s)
```
#### PASS 5 minutes
#### PASS 5 minutes
#### PASS 5 minutes
#### PASS 4 minutes
#### PASS 5 minutes
### 2025-05-02
#### PASS 5 minutes
### 2025-05-03
#### PASS 4 minutes
### 2025-05-04
#### PASS 5 minutes
### 2025-05-05
#### PASS 4 minutes
### 2025-05-06
#### PASS 4 minutes
### 2025-05-07
#### PASS 5 minutes
### 2025-05-08
#### PASS 5 minutes
### 2025-05-09
#### PASS 5 minutes
### 2025-05-10
#### PASS 5 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:57.8711856Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-05-11T00:29:57.8713243Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-9116608800619565778
2025-05-11T00:29:57.8714815Z     resource_network_peering_test.go:31: 
2025-05-11T00:29:57.8716987Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:57.8721026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:57.8723477Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkpeering/resource_network_peering_test.go:31
2025-05-11T00:29:57.8724381Z         	Error:      	Received unexpected error:
2025-05-11T00:29:57.8725297Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.8725913Z         	Test:       	TestAccNetworkRSNetworkPeering_Azure
2025-05-11T00:29:57.8726985Z         	Messages:   	Project creation failed: test-acc-tf-p-9116608800619565778, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.8727969Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (0.29s)
```
### 2025-05-12
#### PASS 4 minutes
### 2025-05-13
#### FAIL 7 minutes
```
2025-05-13T00:40:48.3755177Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-05-13T00:40:48.3756291Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-8026943775583316086
2025-05-13T00:40:48.3764701Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-05-13T00:40:48.3790105Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-05-13T00:40:48.3791137Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-05-13T00:40:48.3791971Z         
2025-05-13T00:40:48.3792666Z         Error: peer networking is in a failed state: RETRYABLE
2025-05-13T00:40:48.3793256Z         
2025-05-13T00:40:48.3793901Z           with mongodbatlas_network_peering.test,
2025-05-13T00:40:48.3795067Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-05-13T00:40:48.3796161Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-05-13T00:40:48.3796907Z         
2025-05-13T00:40:48.3797436Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (477.81s)
```
#### PASS 4 minutes
### 2025-05-14
#### PASS 5 minutes
### 2025-05-15
#### PASS 4 minutes
### 2025-05-16
#### PASS 4 minutes
### 2025-05-17
#### PASS 5 minutes
### 2025-05-18
#### PASS 5 minutes
### 2025-05-19
#### PASS 5 minutes
### 2025-05-20
#### PASS 4 minutes
### 2025-05-21
#### PASS 4 minutes
### 2025-05-22
#### PASS 5 minutes
### 2025-05-23
#### PASS 5 minutes
### 2025-05-24
#### PASS 5 minutes
### 2025-05-25
#### PASS 5 minutes
### 2025-05-26
#### PASS 5 minutes
### 2025-05-27
#### PASS 5 minutes
### 2025-05-28
#### PASS 5 minutes
#### PASS 5 minutes
### 2025-05-29
#### PASS 4 minutes
### 2025-05-30
#### PASS 5 minutes
### 2025-05-31
#### PASS 4 minutes
### 2025-06-01
#### PASS 5 minutes
#### PASS 5 minutes
#### PASS 5 minutes
#### PASS 5 minutes
#### PASS 5 minutes
#### PASS 5 minutes
### 2025-06-02
#### PASS 5 minutes
#### PASS 5 minutes
#### PASS 4 minutes
### 2025-06-03
#### PASS 4 minutes
### 2025-06-04
#### PASS 4 minutes
### 2025-06-05
#### FAIL 25 minutes
```
2025-06-05T00:54:09.2432233Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-06-05T00:54:09.2433464Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-2128731710491454417
2025-06-05T00:54:09.2439560Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-06-05T00:54:09.2531418Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-06-05T00:54:09.2531991Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:54:09.2532428Z         
2025-06-05T00:54:09.2532951Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-06-05T00:54:09.2533384Z         
2025-06-05T00:54:09.2533735Z           with mongodbatlas_network_peering.test,
2025-06-05T00:54:09.2534403Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-06-05T00:54:09.2535021Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-06-05T00:54:09.2535453Z         
2025-06-05T00:54:09.2542240Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/42386c02-8164-4f5b-ada4-e3e5d7e6fb7b/terraform
2025-06-05T00:54:09.2543025Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-05T00:54:09.2543471Z         
2025-06-05T00:54:09.2544174Z         Error: error deleting MongoDB Network Peering Container (6840e4bd161ca93c1f052036): couldn't find resource (21 retries)
2025-06-05T00:54:09.2544937Z         
2025-06-05T00:54:09.2545507Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (1525.78s)
```
### 2025-06-06
#### PASS 5 minutes
### 2025-06-07
#### PASS 4 minutes
### 2025-06-08
#### PASS 4 minutes
### 2025-06-09
#### PASS 5 minutes
### 2025-06-10
#### PASS 5 minutes
### 2025-06-11
#### PASS 4 minutes
#### PASS 4 minutes
### 2025-06-12
#### PASS 5 minutes
### 2025-06-13
#### PASS 5 minutes
### 2025-06-14
#### PASS 5 minutes
### 2025-06-15
#### PASS 5 minutes
### 2025-06-16
#### PASS 5 minutes
### 2025-06-17
#### PASS 5 minutes
### 2025-06-18
#### PASS 5 minutes
### 2025-06-19
#### PASS 5 minutes
### 2025-06-20
#### PASS 5 minutes
### 2025-06-21
#### PASS 5 minutes
### 2025-06-22
#### PASS 5 minutes
### 2025-06-23
#### PASS 5 minutes
### 2025-06-24
#### PASS 4 minutes
### 2025-06-25
#### PASS 5 minutes
### 2025-06-26
#### PASS 5 minutes
### 2025-06-27
#### PASS 5 minutes
### 2025-06-28
#### PASS 6 minutes
### 2025-06-29
#### PASS 4 minutes
### 2025-06-30
#### PASS 6 minutes
### 2025-07-01
#### PASS 5 minutes
#### PASS 5 minutes
#### PASS 5 minutes
#### PASS 4 minutes
#### PASS 6 minutes
#### PASS 8 minutes
### 2025-07-02
#### PASS 5 minutes
### 2025-07-03
#### PASS 5 minutes
### 2025-07-04
#### PASS 4 minutes
### 2025-07-05
#### PASS 5 minutes
### 2025-07-06
#### PASS 5 minutes
### 2025-07-07
#### PASS 5 minutes
### 2025-07-08
#### PASS 5 minutes
### 2025-07-09
#### PASS 10 minutes