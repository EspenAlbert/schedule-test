# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 00:41](#error-2025-07-10t0041350000) |  | dev | dangling_resource | 174.08s
[2025-07-10 13:19](#error-2025-07-10t1319330000) |  | qa | dangling_resource | 174.10s
[2025-07-14 00:56](#error-2025-07-14t0056420000) |  | dev |  | 1531.07s
[2025-07-16 00:42](#error-2025-07-16t0042300000) |  | dev |  | 514.03s
[2025-07-21 00:44](#error-2025-07-21t0044390000) |  | dev |  | 508.06s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 4 minutes
  - PASS 6 minutes
  - PASS 8 minutes
- 2025-07-02 PASS 5 minutes
- 2025-07-03 PASS 5 minutes
- 2025-07-04 PASS 4 minutes
- 2025-07-05 PASS 5 minutes
- 2025-07-06 PASS 5 minutes
- 2025-07-07 PASS 5 minutes
- 2025-07-08 PASS 5 minutes
- 2025-07-09 PASS 10 minutes
- 2025-07-10
  - FAIL 2 minutes

### Error 2025-07-10T00:41:35+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-07-10T00:41:35.267000+00:00-TestAccNetworkRSNetworkPeering_Azure',confidence=1.0,ts_when='20 days ago')

```
2025-07-10T00:41:35.2677711Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-07-10T00:41:35.2678796Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-2901041309471150938
2025-07-10T00:41:35.2687407Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-07-10T00:41:35.2704942Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-07-10T00:41:35.2706319Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-10T00:41:35.2707070Z         
2025-07-10T00:41:35.2708689Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-07-10T00:41:35.2709835Z         
2025-07-10T00:41:35.2710440Z           with mongodbatlas_network_peering.test,
2025-07-10T00:41:35.2711619Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-07-10T00:41:35.2712706Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-07-10T00:41:35.2713261Z         
2025-07-10T00:41:35.2721060Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (174.78s)
```

  - FAIL 2 minutes

### Error 2025-07-10T13:19:33+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-07-10T13:19:33.845000+00:00-TestAccNetworkRSNetworkPeering_Azure',confidence=1.0,ts_when='19 days ago')

```
2025-07-10T13:19:33.8457505Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-07-10T13:19:33.8458202Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-6095495617310730814
2025-07-10T13:19:33.8463689Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-07-10T13:19:33.8498033Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-07-10T13:19:33.8498611Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-10T13:19:33.8499039Z         
2025-07-10T13:19:33.8499935Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-07-10T13:19:33.8500712Z         
2025-07-10T13:19:33.8501244Z           with mongodbatlas_network_peering.test,
2025-07-10T13:19:33.8501908Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-07-10T13:19:33.8502518Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-07-10T13:19:33.8502843Z         
2025-07-10T13:19:33.8560648Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (174.98s)
```

- 2025-07-11 PASS 5 minutes
- 2025-07-12 PASS 5 minutes
- 2025-07-13 PASS 4 minutes
- 2025-07-14

### Error 2025-07-14T00:56:42+00:00
```
2025-07-14T00:56:42.4084897Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-07-14T00:56:42.4085626Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-2129133095812518501
2025-07-14T00:56:42.4091466Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-07-14T00:56:42.4100784Z   
2025-07-14T00:56:42.4101247Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-14T00:56:42.4101684Z         
2025-07-14T00:56:42.4102211Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-07-14T00:56:42.4102859Z         
2025-07-14T00:56:42.4103224Z           with mongodbatlas_network_peering.test,
2025-07-14T00:56:42.4103893Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-07-14T00:56:42.4104505Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-07-14T00:56:42.4104839Z         
2025-07-14T00:56:42.4169934Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-07-14T00:56:42.4170533Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T00:56:42.4170981Z         
2025-07-14T00:56:42.4171690Z         Error: error deleting MongoDB Network Peering Container (68744fcad81a2d4bb4ea3e8d): couldn't find resource (21 retries)
2025-07-14T00:56:42.4172358Z         
2025-07-14T00:56:42.4172763Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (1531.73s)
```

- 2025-07-15 PASS 4 minutes
- 2025-07-16

### Error 2025-07-16T00:42:30+00:00
```
2025-07-16T00:42:30.3076828Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-07-16T00:42:30.3077970Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-5774505169936165728
2025-07-16T00:42:30.3085975Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-07-16T00:42:30.3111705Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-07-16T00:42:30.3112710Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-16T00:42:30.3113456Z         
2025-07-16T00:42:30.3114118Z         Error: peer networking is in a failed state: RETRYABLE
2025-07-16T00:42:30.3114692Z         
2025-07-16T00:42:30.3115288Z           with mongodbatlas_network_peering.test,
2025-07-16T00:42:30.3116619Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-07-16T00:42:30.3117718Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-07-16T00:42:30.3118273Z         
2025-07-16T00:42:30.3118782Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (514.32s)
```

- 2025-07-17 PASS 5 minutes
- 2025-07-18 PASS 5 minutes
- 2025-07-19 PASS 5 minutes
- 2025-07-20 PASS 4 minutes
- 2025-07-21

### Error 2025-07-21T00:44:39+00:00
```
2025-07-21T00:44:39.2584525Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-07-21T00:44:39.2585390Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-8049311120620156986
2025-07-21T00:44:39.2590220Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-07-21T00:44:39.2604404Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-07-21T00:44:39.2604966Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-07-21T00:44:39.2605601Z         
2025-07-21T00:44:39.2605977Z         Error: peer networking is in a failed state: RETRYABLE
2025-07-21T00:44:39.2606314Z         
2025-07-21T00:44:39.2606645Z           with mongodbatlas_network_peering.test,
2025-07-21T00:44:39.2607286Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-07-21T00:44:39.2607880Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-07-21T00:44:39.2608206Z         
2025-07-21T00:44:39.2608487Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (508.58s)
```

- 2025-07-22 PASS 5 minutes
- 2025-07-23
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 4 minutes
- 2025-07-24 PASS 5 minutes
- 2025-07-25 PASS 4 minutes
- 2025-07-26 PASS 5 minutes
- 2025-07-27 PASS 5 minutes
- 2025-07-28 PASS 5 minutes
- 2025-07-29 PASS 5 minutes
- 2025-07-30 PASS 5 minutes