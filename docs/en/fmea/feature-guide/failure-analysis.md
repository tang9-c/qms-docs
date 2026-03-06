# Failure Analysis

Failure analysis is the fourth step of FMEA analysis, with the goal of identifying potential failures for each function. This guide explains how to perform failure analysis.

## Failure Mode Identification

- **Goal**: Identify potential failures for each function. Add potential failure modes for each function item and evaluate Severity (S), Occurrence (O), and Detection (D).
- **Role**: Implementation role member
- **Operations**:
  - The system will automatically suggest common failure modes, failure effects, and failure causes based on the "Function-Failure" logic chain.
  - Failure chain: Failure cause -> Failure mode -> Failure effect (local/final).
  - Tip: Utilize historical failure data from the "Basic Database" to avoid missing anything.

![Failure Analysis](/images/wps31.png)

![Failure Analysis Details](/images/wps32.png)

![Failure Analysis Example](/images/wps33.png)

## Develop Current Measures

Each current measure needs to fill in two parts: preventive measures and detection measures.

![Current Measures](/images/wps34.png)

![Current Measures Details](/images/wps35.png)

## Related Failures

Related failures are a reverse analysis model based on the function network, systematically deriving how each function fails and the propagation network of the failure network. When selecting failure modes, you can continue to relate failures.

![Related Failures](/images/wps36.png)

![Related Failures Details](/images/wps37.png)

## Failure Network

Failure network is used to view the chain reaction network of failures, helping you understand the failure propagation path and impact scope.

![Failure Network](/images/wps38.png)

![Failure Network Details](/images/wps39.png)

![Failure Network Example](/images/wps40.png)

## Important Process Control

All project members with the role 【Implementation】 must click the 【Complete Analysis】 button. Only when all implementation members complete their tasks will the project proceed to the Risk Analysis stage. This restriction is to avoid forming too much invalid system data.
