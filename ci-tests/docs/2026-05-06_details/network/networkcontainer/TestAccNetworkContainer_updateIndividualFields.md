# network/networkcontainer/TestAccNetworkContainer_updateIndividualFields Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-16 00:54](#error-2026-04-16t0054450000) | NO_CAPACITY /api/atlas/v2/groups/69e032578379397d109c29c8/containers | dev | 0.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 minutes
- 2026-04-08 PASS 2 minutes
- 2026-04-09 PASS 2 minutes
- 2026-04-10 PASS 2 minutes
- 2026-04-11 PASS 2 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 2 minutes
- 2026-04-14 PASS 2 minutes
- 2026-04-15 PASS 2 minutes
- 2026-04-16

### Error 2026-04-16T00:54:45+00:00
```
2026-04-16T00:54:45.2299974Z === RUN   TestAccNetworkContainer_updateIndividualFields
2026-04-16T00:54:45.2313220Z    test_name=TestAccNetworkContainer_updateIndividualFields test_terraform_path=/home/runner/work/_temp/bf15fbe8-2128-4eea-a483-e6d82699456a/terraform test_working_directory=/tmp/plugintest711400562 test_step_number=1
2026-04-16T00:54:45.2314557Z     resource_network_container_test.go:140: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:54:45.2315036Z         
2026-04-16T00:54:45.2317163Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032578379397d109c29c8/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 69e032578379397d109c29c8. Reason: Conflict. Params: [AWS 69e032578379397d109c29c8], BadRequestDetail: 
2026-04-16T00:54:45.2318512Z         
2026-04-16T00:54:45.2318895Z           with mongodbatlas_network_container.test,
2026-04-16T00:54:45.2319629Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-04-16T00:54:45.2320318Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-04-16T00:54:45.2320681Z         
2026-04-16T00:54:45.2321013Z --- FAIL: TestAccNetworkContainer_updateIndividualFields (0.53s)
```

- 2026-04-17 PASS 2 minutes
- 2026-04-18 PASS 2 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 2 minutes
- 2026-04-21 PASS 2 minutes
- 2026-04-22 PASS 2 minutes
- 2026-04-23 PASS 2 minutes
- 2026-04-24 PASS 2 minutes
- 2026-04-25 PASS 2 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 2 minutes
- 2026-04-28 PASS 2 minutes
- 2026-04-29 PASS 2 minutes
- 2026-04-30 PASS 2 minutes
- 2026-05-01 PASS 2 minutes
- 2026-05-02 PASS 2 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 minutes
- 2026-05-05 PASS 2 minutes
- 2026-05-06 PASS 2 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 2 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 2 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 2 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 2 minutes
- 2026-05-04
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-05-05 PASS 2 minutes
- 2026-05-06 PASS 2 minutes
