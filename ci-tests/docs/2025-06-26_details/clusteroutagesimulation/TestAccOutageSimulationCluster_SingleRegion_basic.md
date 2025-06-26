# clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 40 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL(x 2)
Success rate: 95.00%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 35 minutes
```
2025-05-28T00:37:38.4192372Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-28T00:37:38.4210718Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-28T00:37:58.4263036Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-28T00:37:58.4265040Z     pre_check.go:40: Time before creating cluster: 2025-05-28T00:37:58.42605999Z, ProjectID: 68365ad0cbc2304eec2b4d16, Cluster name: test-acc-tf-c-4648373135361575607
2025-05-28T01:13:28.3270327Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (2149.91s)
```
#### PASS 26 minutes
```
2025-05-28T08:36:55.1332039Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-28T08:36:55.1346024Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-28T08:37:15.1471674Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-28T08:37:15.1473673Z     pre_check.go:40: Time before creating cluster: 2025-05-28T08:37:15.146873259Z, ProjectID: 6836cb23d000797dbe91e62d, Cluster name: test-acc-tf-c-5613981416132794071
2025-05-28T09:03:12.6290208Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1577.49s)
```
### 2025-05-29
#### PASS 28 minutes
```
2025-05-29T00:37:30.6079378Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-29T00:37:30.6087675Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-29T00:37:40.6098916Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-29T00:37:40.6100735Z     pre_check.go:40: Time before creating cluster: 2025-05-29T00:37:40.609598054Z, ProjectID: 6837ac48a548243915a5c6fa, Cluster name: test-acc-tf-c-7412458554014558141
2025-05-29T01:05:58.5575081Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1707.95s)
```
### 2025-05-30
#### FAIL an hour
```
2025-05-30T00:37:54.2162216Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T00:37:54.2170978Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T00:38:04.2193631Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T00:38:04.2195847Z     pre_check.go:40: Time before creating cluster: 2025-05-30T00:38:04.219105312Z, ProjectID: 6838fde0633e350548a5825a, Cluster name: test-acc-tf-c-2439609549135003094
2025-05-30T01:40:23.5994526Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T01:40:23.5996859Z     resource_cluster_outage_simulation_test.go:20: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-30T01:40:23.5997425Z         
2025-05-30T01:40:23.5998371Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6838fde0633e350548a5825a), Cluster (test-acc-tf-c-2439609549135003094): context deadline exceeded
2025-05-30T01:40:23.5999055Z         
2025-05-30T01:40:23.5999374Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (3749.38s)
```
#### PASS 22 minutes
```
2025-05-30T07:33:25.1306724Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T07:33:25.1315883Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T07:33:40.1347276Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T07:33:40.1348821Z     pre_check.go:40: Time before creating cluster: 2025-05-30T07:33:40.13444998Z, ProjectID: 68395f41cfa5c112cb965a91, Cluster name: test-acc-tf-c-344771908381607540
2025-05-30T07:56:14.5072190Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1369.38s)
```
### 2025-05-31
#### PASS 24 minutes
```
2025-05-31T00:36:48.8500211Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-31T00:36:48.8519850Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-31T00:37:08.8600311Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-31T00:37:08.8602218Z     pre_check.go:40: Time before creating cluster: 2025-05-31T00:37:08.859732628Z, ProjectID: 683a4f1eebf07c11d4e9356a, Cluster name: test-acc-tf-c-2314815511571450672
2025-05-31T01:00:55.7924286Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1446.94s)
```
### 2025-06-01
#### PASS 23 minutes
```
2025-06-01T00:40:56.3248014Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T00:40:56.3257451Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T00:41:06.3266311Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T00:41:06.3270758Z     pre_check.go:40: Time before creating cluster: 2025-06-01T00:41:06.326324548Z, ProjectID: 683ba1964e6c592331c5480f, Cluster name: test-acc-tf-c-7828066911490710763
2025-06-01T01:04:44.4041547Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1428.08s)
```
#### PASS 21 minutes
```
2025-06-01T04:49:53.0709786Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T04:49:53.0717886Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T04:50:03.0725088Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T04:50:03.0726976Z     pre_check.go:40: Time before creating cluster: 2025-06-01T04:50:03.072165995Z, ProjectID: 683bdbee7bf9cf70212c1fb0, Cluster name: test-acc-tf-c-1390755993650974574
2025-06-01T05:11:02.8518388Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1269.78s)
```
#### PASS 22 minutes
```
2025-06-01T08:58:47.0740397Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T08:58:47.0748006Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T08:58:57.0774683Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T08:58:57.0778302Z     pre_check.go:40: Time before creating cluster: 2025-06-01T08:58:57.077195934Z, ProjectID: 683c16447bf9cf70212cb376, Cluster name: test-acc-tf-c-7087122806041259650
2025-06-01T09:21:23.4476614Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1356.37s)
```
#### PASS 20 minutes
```
2025-06-01T13:08:05.1459012Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T13:08:05.1475533Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T13:08:20.1534196Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T13:08:20.1536398Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:08:20.153077017Z, ProjectID: 683c50b27bf9cf70212d1dbe, Cluster name: test-acc-tf-c-8997452745849893898
2025-06-01T13:28:45.2716305Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1240.12s)
```
#### PASS 21 minutes
```
2025-06-01T17:17:28.7363223Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T17:17:28.7370886Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T17:17:38.7393466Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T17:17:38.7395713Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:17:38.739044813Z, ProjectID: 683c8b267bf9cf70212d9171, Cluster name: test-acc-tf-c-6543659105722011424
2025-06-01T17:39:28.6912920Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1319.95s)
```
#### PASS 20 minutes
```
2025-06-01T21:25:43.4624860Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T21:25:43.4632539Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T21:25:53.4687119Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-01T21:25:53.4691122Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:25:53.468398681Z, ProjectID: 683cc556cc8f0935c7c35b8f, Cluster name: test-acc-tf-c-6765186250755310685
2025-06-01T21:46:28.8941089Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1245.43s)
```
### 2025-06-02
#### PASS 22 minutes
```
2025-06-02T00:39:05.3396956Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-02T00:39:05.3406231Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-02T00:39:20.3429903Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-02T00:39:20.3431809Z     pre_check.go:40: Time before creating cluster: 2025-06-02T00:39:20.342687374Z, ProjectID: 683cf2a77bf9cf70212e4d56, Cluster name: test-acc-tf-c-4170438783620365898
2025-06-02T01:02:04.8070540Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1379.47s)
```
#### PASS 24 minutes
```
2025-06-02T01:34:56.9929964Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-02T01:34:56.9937738Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-02T01:35:06.9993818Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-02T01:35:06.9995432Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:35:06.999051495Z, ProjectID: 683cffbf7bf9cf70212e8d8a, Cluster name: test-acc-tf-c-6729627217284960624
2025-06-02T01:59:13.6663632Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1456.67s)
```
#### PASS 22 minutes
```
2025-06-02T05:50:07.8132010Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-02T05:50:07.8140101Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-02T05:50:22.8203834Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-02T05:50:22.8205339Z     pre_check.go:40: Time before creating cluster: 2025-06-02T05:50:22.820093314Z, ProjectID: 683d3b8d7bf9cf70212f0cfd, Cluster name: test-acc-tf-c-1719456239738146
2025-06-02T06:12:19.1504926Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1331.34s)
```
### 2025-06-03
#### PASS 23 minutes
```
2025-06-03T00:38:09.8722777Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-03T00:38:09.8732427Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-03T00:38:19.8751305Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-03T00:38:19.8752812Z     pre_check.go:40: Time before creating cluster: 2025-06-03T00:38:19.874882998Z, ProjectID: 683e43ef25aee225e55bd626, Cluster name: test-acc-tf-c-7791322994589254371
2025-06-03T01:01:15.9064364Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1386.03s)
```
### 2025-06-04
#### PASS 23 minutes
```
2025-06-04T00:29:07.9796210Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-04T00:29:07.9804660Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-04T00:29:17.9808276Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-04T00:29:17.9810060Z     pre_check.go:40: Time before creating cluster: 2025-06-04T00:29:17.980518901Z, ProjectID: 683f9350040e946541785c44, Cluster name: test-acc-tf-c-1358344039917995008
2025-06-04T00:52:26.0275627Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1398.05s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:45.5767050Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:28:45.5776197Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:28:55.5844734Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:28:55.5847261Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:28:55.58418991Z, ProjectID: 6840e4b9161ca93c1f051d06, Cluster name: test-acc-tf-c-5365681198474183453
2025-06-05T00:31:56.6585730Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:31:56.6586390Z     resource_cluster_outage_simulation_test.go:20: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:31:56.6586846Z         
2025-06-05T00:31:56.6588775Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d06/clusters/test-acc-tf-c-5365681198474183453 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:56.6590094Z         
2025-06-05T00:31:56.6590461Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:31:56.6591172Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:31:56.6591830Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:31:56.6592169Z         
2025-06-05T00:31:56.7068488Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (191.13s)
```
### 2025-06-06
#### PASS 22 minutes
```
2025-06-06T00:30:04.4379762Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-06T00:30:04.4387223Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-06T00:30:14.4463768Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-06T00:30:14.4468285Z     pre_check.go:40: Time before creating cluster: 2025-06-06T00:30:14.446080005Z, ProjectID: 684236878dba3d3587c49590, Cluster name: test-acc-tf-c-8415814221769054196
2025-06-06T00:52:40.5525213Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1356.11s)
```
### 2025-06-07
#### PASS 25 minutes
```
2025-06-07T00:28:37.4155970Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-07T00:28:37.4163737Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-07T00:28:57.4277944Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-07T00:28:57.4280255Z     pre_check.go:40: Time before creating cluster: 2025-06-07T00:28:57.427499467Z, ProjectID: 684387b3bf49d05598c14159, Cluster name: test-acc-tf-c-25711301270183972
2025-06-07T00:54:24.5390439Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1547.12s)
```
### 2025-06-08
#### PASS 23 minutes
```
2025-06-08T00:31:59.6065779Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-08T00:31:59.6077690Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-08T00:32:19.6197530Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-08T00:32:19.6198768Z     pre_check.go:40: Time before creating cluster: 2025-06-08T00:32:19.619506006Z, ProjectID: 6844d9fd0b3c4a5b49f6a97f, Cluster name: test-acc-tf-c-266564231597716212
2025-06-08T00:55:14.4519201Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1394.84s)
```
### 2025-06-09
#### PASS 22 minutes
```
2025-06-09T00:30:51.2230903Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-09T00:30:51.2255399Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-09T00:31:06.2310146Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-09T00:31:06.2311962Z     pre_check.go:40: Time before creating cluster: 2025-06-09T00:31:06.230769534Z, ProjectID: 68462b39e21315547b36043d, Cluster name: test-acc-tf-c-3294625851128900532
2025-06-09T00:53:41.9418966Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1370.72s)
```
### 2025-06-10
#### PASS 33 minutes
```
2025-06-10T00:37:46.2770930Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-10T00:37:46.2780393Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-10T00:37:56.2798983Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-10T00:37:56.2802744Z     pre_check.go:40: Time before creating cluster: 2025-06-10T00:37:56.27959113Z, ProjectID: 68477e589fcc7665ab8305fc, Cluster name: test-acc-tf-c-1272611135815251965
2025-06-10T01:11:23.6349105Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (2017.36s)
```
### 2025-06-11
#### PASS 22 minutes
```
2025-06-11T00:28:48.1223305Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-11T00:28:48.1233366Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-11T00:29:08.1345571Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-11T00:29:08.1347413Z     pre_check.go:40: Time before creating cluster: 2025-06-11T00:29:08.134314872Z, ProjectID: 6848cdbd69b57d1e7dbaf494, Cluster name: test-acc-tf-c-3271314903546351187
2025-06-11T00:51:31.1780752Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1363.06s)
```
#### PASS 24 minutes
```
2025-06-11T07:37:10.8223757Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-11T07:37:10.8231396Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-11T07:37:20.8275172Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-11T07:37:20.8279966Z     pre_check.go:40: Time before creating cluster: 2025-06-11T07:37:20.827208326Z, ProjectID: 6849322449c05124969e636c, Cluster name: test-acc-tf-c-2585741521061944607
2025-06-11T08:01:31.0482123Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1460.23s)
```
### 2025-06-12
#### PASS 23 minutes
```
2025-06-12T00:28:23.5024446Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-12T00:28:23.5041643Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-12T00:28:38.5106553Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-12T00:28:38.5107865Z     pre_check.go:40: Time before creating cluster: 2025-06-12T00:28:38.510411539Z, ProjectID: 684a1f245c025329ee514a5c, Cluster name: test-acc-tf-c-5591399080239921025
2025-06-12T00:52:14.9395753Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1431.44s)
```
### 2025-06-13
#### PASS 24 minutes
```
2025-06-13T00:28:30.3379095Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-13T00:28:30.3387646Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-13T00:28:40.3412094Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-13T00:28:40.3416663Z     pre_check.go:40: Time before creating cluster: 2025-06-13T00:28:40.340901268Z, ProjectID: 684b70ac868b87498d553c4d, Cluster name: test-acc-tf-c-4823127509949195789
2025-06-13T00:52:47.1599479Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1456.82s)
```
### 2025-06-14
#### PASS 23 minutes
```
2025-06-14T00:27:57.5212229Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-14T00:27:57.5220198Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-14T00:28:07.5286426Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-14T00:28:07.5290392Z     pre_check.go:40: Time before creating cluster: 2025-06-14T00:28:07.528343463Z, ProjectID: 684cc20a8f295e188b9c6f49, Cluster name: test-acc-tf-c-6096556568487902348
2025-06-14T00:51:13.4364669Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1395.91s)
```
### 2025-06-15
#### PASS 24 minutes
```
2025-06-15T00:31:47.5022145Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-15T00:31:47.5030417Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-15T00:31:57.5084388Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-15T00:31:57.5087657Z     pre_check.go:40: Time before creating cluster: 2025-06-15T00:31:57.50816403Z, ProjectID: 684e14724bc09a153196d9e2, Cluster name: test-acc-tf-c-3308320947184264948
2025-06-15T00:56:03.6056049Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1456.10s)
```
### 2025-06-16
#### PASS 23 minutes
```
2025-06-16T00:30:17.5982805Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-16T00:30:17.5993350Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-16T00:30:37.6044744Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-16T00:30:37.6046064Z     pre_check.go:40: Time before creating cluster: 2025-06-16T00:30:37.604235179Z, ProjectID: 684f659425b50457df2bec10, Cluster name: test-acc-tf-c-2760308770337537404
2025-06-16T00:53:40.2166094Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1402.62s)
```
### 2025-06-17
#### PASS 23 minutes
```
2025-06-17T00:28:57.6589708Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-17T00:28:57.6601640Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-17T00:29:17.6629147Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-17T00:29:17.6630572Z     pre_check.go:40: Time before creating cluster: 2025-06-17T00:29:17.662619307Z, ProjectID: 6850b6c66200565f4c9cf68a, Cluster name: test-acc-tf-c-8545696327633176755
2025-06-17T00:52:55.1098200Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1437.45s)
```
### 2025-06-18
#### PASS 22 minutes
```
2025-06-18T00:28:54.1388477Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-18T00:28:54.1405271Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-18T00:29:09.1446041Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-18T00:29:09.1447615Z     pre_check.go:40: Time before creating cluster: 2025-06-18T00:29:09.144328967Z, ProjectID: 68520842f5c9a6304ddbed25, Cluster name: test-acc-tf-c-5435461919868279139
2025-06-18T00:50:55.5414826Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1321.40s)
```
### 2025-06-19
#### PASS 30 minutes
```
2025-06-19T00:29:13.3597253Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-19T00:29:13.3605568Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-19T00:29:28.3697430Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-19T00:29:28.3700255Z     pre_check.go:40: Time before creating cluster: 2025-06-19T00:29:28.369515582Z, ProjectID: 685359d7e16f343ef1d9c998, Cluster name: test-acc-tf-c-3175213590519684506
2025-06-19T00:59:49.4940627Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1836.13s)
```
### 2025-06-20
#### PASS 24 minutes
```
2025-06-20T00:28:34.5748258Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-20T00:28:34.5755378Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-20T00:28:44.5768106Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-20T00:28:44.5770680Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:28:44.576467613Z, ProjectID: 6854ab30cd32be2bdf8bf856, Cluster name: test-acc-tf-c-4599464280808138278
2025-06-20T00:53:01.2465708Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1466.67s)
```
### 2025-06-21
#### PASS 25 minutes
```
2025-06-21T00:28:25.7858784Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-21T00:28:25.7866947Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-21T00:28:40.7921760Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-21T00:28:40.7923499Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:28:40.791890584Z, ProjectID: 6855fca8f3e6555d2acb7c48, Cluster name: test-acc-tf-c-2994394981912871232
2025-06-21T00:53:29.1735099Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1503.39s)
```
### 2025-06-22
#### PASS 22 minutes
```
2025-06-22T00:31:39.7807789Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-22T00:31:39.7824377Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-22T00:31:54.7874596Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-22T00:31:54.7876167Z     pre_check.go:40: Time before creating cluster: 2025-06-22T00:31:54.787194968Z, ProjectID: 68574ee9af7a0954e84ad483, Cluster name: test-acc-tf-c-5530418602096902019
2025-06-22T00:54:12.0266255Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1352.24s)
```
### 2025-06-23
#### PASS 22 minutes
```
2025-06-23T00:31:00.4877438Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-23T00:31:00.4885137Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-23T00:31:20.4964142Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-23T00:31:20.4965972Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:31:20.496154856Z, ProjectID: 6858a0419c500e6d1cbd5a19, Cluster name: test-acc-tf-c-1642603592401582196
2025-06-23T00:53:54.1743674Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1373.69s)
```
### 2025-06-24
#### PASS 22 minutes
```
2025-06-24T00:28:57.8707356Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-24T00:28:57.8716739Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-24T00:29:12.8800973Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-24T00:29:12.8803132Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:29:12.879743708Z, ProjectID: 6859f14722100658cf265f3f, Cluster name: test-acc-tf-c-7146196819278624354
2025-06-24T00:51:57.3160395Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1379.44s)
```
### 2025-06-25
#### PASS 23 minutes
```
2025-06-25T00:29:15.5548027Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-25T00:29:15.5555719Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-25T00:29:25.5573260Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-25T00:29:25.5575620Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:29:25.557023742Z, ProjectID: 685b42d9bf2fcb3b443f74c0, Cluster name: test-acc-tf-c-5839630463993061175
2025-06-25T00:53:09.8133119Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1434.26s)
```
### 2025-06-26
#### PASS 23 minutes
```
2025-06-26T00:29:08.3156103Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-26T00:29:08.3162865Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-26T00:29:18.3188003Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-26T00:29:18.3190396Z     pre_check.go:40: Time before creating cluster: 2025-06-26T00:29:18.318465915Z, ProjectID: 685c94525c10882b9843fc36, Cluster name: test-acc-tf-c-8366982087748969674
2025-06-26T00:52:28.8316647Z --- PASS: TestAccOutageSimulationCluster_SingleRegion_basic (1400.52s)
```